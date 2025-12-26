<script lang="ts">
	interface ContributionData {
		cal: {
			[key: string]: {
				github: number;
			};
		};
		totalGH: number;
	}

	interface DayData {
		date: Date;
		contributions: number;
	}

	interface Props {
		data: ContributionData;
	}

	let { data }: Props = $props();

	const today = new Date();
	const year = today.getFullYear();

	function getDatesInYear(year: number): Date[] {
		const dates: Date[] = [];
		const start = new Date(Date.UTC(year, 0, 1));
		const end = new Date(Date.UTC(year, 11, 31));

		const current = new Date(start);
		while (current <= end) {
			dates.push(new Date(current));
			current.setUTCDate(current.getUTCDate() + 1);
		}
		return dates;
	}

	function formatDate(date: Date): string {
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
	}

	function toDateString(date: Date): string {
		return date.toISOString().split('T')[0];
	}

	const dates = getDatesInYear(year);
	// 0 = Empty, 4 = Max
	const contributionLevels = [0, 1, 2, 3, 4];
	const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	let weeks = $derived.by(() => {
		const weeksArray: DayData[][] = [];
		let currentWeek: DayData[] = [];

		dates.forEach((date, index) => {
			if (index === 0 || date.getUTCDay() === 0) {
				if (currentWeek.length > 0) {
					weeksArray.push(currentWeek);
				}
				currentWeek = [];
			}

			const dateIdx = toDateString(date);
			const contributions = data.cal[dateIdx]?.github ?? 0;

			currentWeek.push({
				date,
				contributions: date > today ? -1 : contributions
			});
		});

		if (currentWeek.length > 0) {
			weeksArray.push(currentWeek);
		}

		return weeksArray;
	});

	// --- COLOR LOGIC CHANGED HERE ---
	function getTileColor(contributions: number): string {
		// Future dates
		if (contributions === -1) return 'bg-neutral-900/50'; 
		// No contributions
		if (contributions === 0) return 'bg-neutral-900';
		
		// Activity Levels
		if (contributions <= 2) return 'bg-slate-800'; // Level 1
		if (contributions <= 4) return 'bg-slate-600'; // Level 2
		if (contributions <= 6) return 'bg-slate-400'; // Level 3
		return 'bg-white';                             // Level 4 (Max)
	}

	function getColorClass(level: number): string {
		switch (level) {
			case 0:
				return 'bg-neutral-900';
			case 1:
				return 'bg-slate-800';
			case 2:
				return 'bg-slate-600';
			case 3:
				return 'bg-slate-400';
			case 4:
				return 'bg-white';
			default:
				return 'bg-neutral-900';
		}
	}

	function getTooltip(day: DayData): string {
		if (day.contributions === -1) {
			return formatDate(day.date);
		}
		return `${formatDate(day.date)}: ${day.contributions} contributions`;
	}
</script>

<div class="w-full max-w-3xl">
	<div class="flex max-w-3xl overflow-hidden">
		<div class="w-10 pr-2 pt-5">
			<div class="h-5"></div>
			<div class="h-5 text-center text-xs leading-6 text-slate-500">Mon</div>
			<div class="h-5"></div>
			<div class="h-5 text-center text-xs leading-6 text-slate-500">Wed</div>
			<div class="h-5"></div>
			<div class="h-5 text-center text-xs leading-6 text-slate-500">Fri</div>
		</div>

		<div class="scrollbar-hide flex w-full overflow-x-auto">
			<div class="relative mt-5 flex gap-1">
				<div class="absolute -mt-5 flex w-full justify-around gap-1 text-slate-400">
					{#each monthLabels as month}
						<div class="text-xs">{month}</div>
					{/each}
				</div>
				
				{#each weeks as week, weekIndex}
					<div class="w-4" class:mt-auto={weekIndex === 0}>
						{#each week as day}
							<div 
								class="my-1 size-4 rounded-sm {getTileColor(day.contributions)}" 
								title={getTooltip(day)}
							></div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-2 flex justify-end gap-2 text-xs text-slate-400">
		<div class="flex items-center gap-1">
			<span>Less</span>
			<div class="flex gap-1">
				{#each contributionLevels as level}
					<div class="h-4 w-4 rounded-sm {getColorClass(level)}"></div>
				{/each}
			</div>
			<span>More</span>
		</div>
	</div>
</div>

