"use client";

import { NotificationCard } from "./notification-card";
import { Gifts } from "./gifts";
import { EarningsHeader } from "./earnings-header";
import { PointsCounter } from "./points-counter";
import { Capybara } from "./capybara";

export function EarningsPage() {
  return (
    <>
      <EarningsHeader />

      <div className="flex flex-col items-center justify-center pt-[72px]">
        <Gifts />
        <PointsCounter />

        <Capybara />
        <NotificationCard />
      </div>
    </>
  );
}
