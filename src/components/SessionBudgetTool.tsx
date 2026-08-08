"use client";

import { useMemo, useState } from "react";

const PKR = new Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  maximumFractionDigits: 0,
});

export default function SessionBudgetTool() {
  const [weekly, setWeekly] = useState(3000);

  const plan = useMemo(() => {
    const safeWeekly = Number.isFinite(weekly) && weekly > 0 ? weekly : 0;
    return {
      session: Math.floor(safeWeekly * 0.2),
      stopLoss: Math.floor(safeWeekly * 0.15),
      neverDeposit: Math.floor(safeWeekly * 0.5),
    };
  }, [weekly]);

  return (
    <div className="not-prose rounded-xl border border-amber-200 bg-amber-50/70 p-5">
      <label htmlFor="weekly-budget" className="block text-sm font-semibold text-amber-950">
        Weekly entertainment budget (PKR)
      </label>
      <input
        id="weekly-budget"
        type="number"
        min={500}
        step={100}
        value={weekly}
        onChange={(e) => setWeekly(Number(e.target.value))}
        className="mt-2 w-full max-w-xs rounded-lg border border-amber-300 bg-white px-3 py-2 text-neutral-900"
      />
      <ul className="mt-4 space-y-2 text-[15px] text-neutral-800">
        <li>
          <strong>Max per sitting:</strong> {PKR.format(plan.session)} — stop when this is gone,
          even if you are “due” a win.
        </li>
        <li>
          <strong>Hard stop-loss:</strong> {PKR.format(plan.stopLoss)} — close the app if you hit
          this before the sitting cap.
        </li>
        <li>
          <strong>Never deposit more than:</strong> {PKR.format(plan.neverDeposit)} in one week,
          including “just one more” top-ups.
        </li>
      </ul>
      <p className="mt-3 text-sm text-neutral-600">
        This is a bankroll helper, not financial advice. 3Patti Gold is 18+ real-money play. If
        you cannot afford the weekly number, do not deposit.
      </p>
    </div>
  );
}
