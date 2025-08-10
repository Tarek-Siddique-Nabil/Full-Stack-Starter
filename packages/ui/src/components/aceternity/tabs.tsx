"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@repo/ui/lib/utils";
import { Separator } from "@repo/ui/components/separator";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
  icon?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab | undefined>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]!);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  if(!active) return null
  return (
    <>
      <div
        className={cn(
          "inline-flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar w-fit bg-sidebar p-1 rounded-lg",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn("relative px-4 py-2 rounded-lg", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active?.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-background dark:bg-zinc-800 rounded-lg ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative inline-flex gap-2 items-center justify-center  text-black dark:text-white">
              {tab.icon} <span className="font-medium">{tab.title}</span>
            </span>
          </button>
        ))}
      </div>
      <Separator className="mt-4"/>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        className={cn("mt-6", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
}) => {
  const isActive = (tab: Tab) => {
    if(!tabs[0]) return null
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 50,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
