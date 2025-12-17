import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import staffingGroups from './data.json';
import StaffingPopup from './StaffingPopup';
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaExternalLinkAlt,
} from 'react-icons/fa';

function timeToMinutes(time: string) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function formatTime(value: number) {
  return value.toString().padStart(2, '0');
}

const bgColors = [
  'bg-green-600/20',
  'bg-blue-600/20',
  'bg-red-600/20',
  'bg-yellow-600/20',
  'bg-purple-600/20',
  'bg-orange-600/20',
  'bg-slate-600/20',
  'bg-pink-500/20',
  'bg-red-800/20',
  'bg-yellow-800/20',
  'bg-green-900/20',
  'bg-blue-900/20',
];
const textColors = [
  'text-green-500',
  'text-blue-500',
  'text-red-500',
  'text-yellow-500',
  'text-purple-500',
  'text-orange-600',
  'text-slate-500',
  'text-pink-500',
  'text-red-800',
  'text-yellow-700',
  'text-green-700',
  'text-blue-700',
];

export default function Staffing() {
  const [layout, setLayout] = useState<'controller' | 'position'>('controller');
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const [selectedCell, setSelectedCell] = useState<null | {
    rect: DOMRect;
    positionName: string;
    controllerName: string;
    startMinutes: number;
    endMinutes: number;
    schedule: { name: string; start: string; end: string }[];
  }>(null);

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      setTime({
        hours: now.getUTCHours(),
        minutes: now.getUTCMinutes(),
        seconds: now.getUTCSeconds(),
      });
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const TIME_STEP = 30;
  const START_MIN = 16 * 60; // 16
  const END_MIN = 23 * 60; // 23

  const timeSlots = [];
  for (let t = START_MIN; t <= END_MIN; t += TIME_STEP) {
    const hh = Math.floor(t / 60);
    const mm = t % 60;
    timeSlots.push({
      label: `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`,
      minutes: t,
    });
  }

  const nowMinutes = new Date().getUTCHours() * 60 + new Date().getUTCMinutes();

  function colorForName(name: string, controllerOrder: string[]) {
    const idx = controllerOrder.indexOf(name);
    return bgColors[idx % bgColors.length] || 'bg-gray-500';
  }

  function colorForNameText(name: string, controllerOrder: string[]) {
    const idx = controllerOrder.indexOf(name);
    return textColors[idx % textColors.length] || 'text-gray-500';
  }

  return (
    <section className="py-10 bg-gradient-to-br from-slate-900 to-gray-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto sm:px-6">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold mb-6">
          ATC{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-700">
            Staffing
          </span>
        </h1>

        <div className="text-center font-mono">
          <p className="text-2xl text-gray-300">
            {formatTime(time.hours)} : {formatTime(time.minutes)} :{' '}
            {formatTime(time.seconds)}
          </p>
        </div>

        <div className="mt-6 mb-8 flex gap-4 text-center justify-center">
          <button
            className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition"
            onClick={() =>
              setLayout(layout === 'controller' ? 'position' : 'controller')
            }
          >
            Switch to {layout === 'controller' ? 'Position List' : 'ATCO List'}
          </button>
        </div>

        {staffingGroups.groups.map((group, gi) => {
          // unique controllers
          const controllersOrder: string[] = [];
          group.positions.forEach((pos: any) =>
            pos.schedule.forEach((s: any) => {
              if (!controllersOrder.includes(s.name))
                controllersOrder.push(s.name);
            }),
          );

          return (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10 p-4 bg-white/5 border border-gray-800 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-baseline gap-2">
                {group.groupName}
                <span className="text-sm text-gray-500 font-normal">
                  ({controllersOrder.length})
                </span>
              </h2>
              <div className="overflow-x-auto pb-4">
                <table className="table-fixed min-w-full border border-gray-700">
                  <thead className="bg-white/10">
                    <tr className="border-b border-gray-700 text-left">
                      <th className="sticky min-w-[120px] px-4 py-2 left-[-1px] bg-gray-700 z-10 text-sm">
                        {layout === 'controller' ? 'ATCO' : 'Position'}
                      </th>
                      {timeSlots.map((ts, idx) => {
                        const isNow =
                          Math.floor(nowMinutes / TIME_STEP) * TIME_STEP ===
                          ts.minutes;
                        return (
                          <th
                            key={idx}
                            className={`px-2 py-2 text-xs border-l w-[100px] border-gray-700 text-gray-300 ${isNow ? 'bg-green-600/20' : ''}`}
                          >
                            {ts.label}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {layout === 'controller'
                      ? controllersOrder.map((cName) => {
                          // build grouped cells with start/end times
                          let groupedCells: Array<{
                            value: string;
                            count: number;
                            startMinutes: number;
                            endMinutes: number;
                          }> = [];
                          let currentGroup: null | {
                            value: string;
                            count: number;
                            startMinutes: number;
                          } = null;

                          timeSlots.forEach((ts) => {
                            const segment = group.positions
                              .map((pos) => ({
                                positionName: pos.positionName,
                                schedule: pos.schedule.filter(
                                  (s) =>
                                    s.name === cName &&
                                    timeToMinutes(s.start) <= ts.minutes &&
                                    ts.minutes < timeToMinutes(s.end),
                                ),
                              }))
                              .find((pos) => pos.schedule.length > 0);

                            const value = segment
                              ? segment.positionName
                              : 'iii';

                            if (currentGroup && currentGroup.value === value) {
                              currentGroup.count++;
                            } else {
                              if (currentGroup) {
                                groupedCells.push({
                                  value: currentGroup.value,
                                  count: currentGroup.count,
                                  startMinutes: currentGroup.startMinutes,
                                  endMinutes:
                                    currentGroup.startMinutes +
                                    currentGroup.count * TIME_STEP,
                                });
                              }
                              currentGroup = {
                                value,
                                count: 1,
                                startMinutes: ts.minutes,
                              };
                            }
                          });

                          if (currentGroup) {
                            groupedCells.push({
                              value: currentGroup.value,
                              count: currentGroup.count,
                              startMinutes: currentGroup.startMinutes,
                              endMinutes:
                                currentGroup.startMinutes +
                                currentGroup.count * TIME_STEP,
                            });
                          }

                          return (
                            <tr
                              key={cName}
                              className="border border-gray-700 hover:bg-white/5"
                            >
                              <td className="sticky px-4 py-2 text-sm left-[-1px] bg-gray-800 z-10 shadow-[inset_1px_0_0_#374151,inset_-1px_0_0_#374151]">
                                {cName}
                              </td>
                              {groupedCells.map((group, idx) => {
                                const posObj =
                                  group.value !== 'iii'
                                    ? group // placeholder — we still need to map group.value -> pos.schedule below
                                    : null;

                                const positionObj =
                                  group.value !== 'iii'
                                    ? group.value &&
                                      group.value !== 'iii' &&
                                      group.value // we'll map to schedule from outer group
                                    : null;

                                // the click handler will resolve actual schedule entry by inspecting
                                // the position with that name from group.positions
                                return (
                                  <td
                                    key={idx}
                                    colSpan={group.count}
                                    onClick={(e) => {
                                      if (group.value === 'iii') return;
                                      // find the matching pos object from the outer group.positions
                                      const pos =
                                        group.value && group.value !== 'iii'
                                          ? group.positions?.find(
                                              (p: any) =>
                                                p.positionName === group.value,
                                            ) ||
                                            staffingGroups.groups[
                                              gi
                                            ].positions?.find(
                                              (p: any) =>
                                                p.positionName === group.value,
                                            )
                                          : null;

                                      if (!pos) return;
                                      // find the exact schedule entry for this controller that overlaps the grouped start
                                      const scheduleEntry =
                                        pos.schedule.find((s: any) => {
                                          const sMin = timeToMinutes(s.start);
                                          const eMin = timeToMinutes(s.end);
                                          return (
                                            s.name === cName &&
                                            sMin <= group.startMinutes &&
                                            group.startMinutes < eMin
                                          );
                                        }) ||
                                        pos.schedule.find(
                                          (s: any) => s.name === cName,
                                        );

                                      if (!scheduleEntry) return;
                                      const rect = (
                                        e.currentTarget as HTMLElement
                                      ).getBoundingClientRect();
                                      setSelectedCell({
                                        rect,
                                        positionName: pos.positionName,
                                        controllerName: scheduleEntry.name,
                                        startMinutes: timeToMinutes(
                                          scheduleEntry.start,
                                        ),
                                        endMinutes: timeToMinutes(
                                          scheduleEntry.end,
                                        ),
                                        schedule: pos.schedule,
                                      });
                                    }}
                                    className={`whitespace-nowrap px-2 py-2 text-center text-sm border-r border-gray-700 cursor-pointer transition ${
                                      group.value !== 'iii'
                                        ? 'bg-blue-600/20 text-blue-500 hover:bg-blue-600/40'
                                        : 'text-gray-700'
                                    }`}
                                    style={{ width: `${40 * group.count}px` }}
                                  >
                                    {group.value}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })
                      : group.positions.map((pos) => {
                          // build grouped cells with start/end times (for position rows)
                          let groupedCells: Array<{
                            value: string;
                            count: number;
                            startMinutes: number;
                            endMinutes: number;
                          }> = [];
                          let currentGroup: null | {
                            value: string;
                            count: number;
                            startMinutes: number;
                          } = null;

                          timeSlots.forEach((ts) => {
                            const controller = pos.schedule.find(
                              (s) =>
                                timeToMinutes(s.start) <= ts.minutes &&
                                ts.minutes < timeToMinutes(s.end),
                            );

                            const value = controller?.name || '';

                            if (currentGroup && currentGroup.value === value) {
                              currentGroup.count++;
                            } else {
                              if (currentGroup) {
                                groupedCells.push({
                                  value: currentGroup.value,
                                  count: currentGroup.count,
                                  startMinutes: currentGroup.startMinutes,
                                  endMinutes:
                                    currentGroup.startMinutes +
                                    currentGroup.count * TIME_STEP,
                                });
                              }
                              currentGroup = {
                                value,
                                count: 1,
                                startMinutes: ts.minutes,
                              };
                            }
                          });

                          if (currentGroup) {
                            groupedCells.push({
                              value: currentGroup.value,
                              count: currentGroup.count,
                              startMinutes: currentGroup.startMinutes,
                              endMinutes:
                                currentGroup.startMinutes +
                                currentGroup.count * TIME_STEP,
                            });
                          }

                          return (
                            <tr
                              key={pos.positionName}
                              className="border-b border-gray-700 hover:bg-white/5"
                            >
                              <td className="sticky px-4 py-2 text-sm left-[-1px] bg-gray-800 z-10 whitespace-nowrap shadow-[inset_1px_0_0_#374151,inset_-1px_0_0_#374151]">
                                {pos.positionName}
                              </td>
                              {groupedCells.map((group, idx) => {
                                const controller = pos.schedule.find(
                                  (s) => s.name === group.value,
                                );
                                const displayValue = controller?.name || '';

                                return (
                                  <td
                                    key={idx}
                                    colSpan={group.count}
                                    onClick={(e) => {
                                      if (!group.value) return;
                                      const scheduleEntry =
                                        pos.schedule.find((s) => {
                                          const sMin = timeToMinutes(s.start);
                                          const eMin = timeToMinutes(s.end);
                                          // pick the entry that matches the controller and overlaps the group's start
                                          return (
                                            s.name === group.value &&
                                            sMin <= group.startMinutes &&
                                            group.startMinutes < eMin
                                          );
                                        }) ||
                                        pos.schedule.find(
                                          (s) => s.name === group.value,
                                        );

                                      if (!scheduleEntry) return;
                                      const rect = (
                                        e.currentTarget as HTMLElement
                                      ).getBoundingClientRect();
                                      setSelectedCell({
                                        rect,
                                        positionName: pos.positionName,
                                        controllerName: scheduleEntry.name,
                                        startMinutes: timeToMinutes(
                                          scheduleEntry.start,
                                        ),
                                        endMinutes: timeToMinutes(
                                          scheduleEntry.end,
                                        ),
                                        schedule: pos.schedule,
                                      });
                                    }}
                                    className={`whitespace-nowrap px-2 py-2 text-center text-sm border-r border-gray-700 cursor-pointer transition truncate overflow-hidden text-ellipsis ${
                                      group.value
                                        ? colorForName(
                                            controller?.name,
                                            controllersOrder,
                                          ) +
                                          ' ' +
                                          colorForNameText(
                                            controller?.name,
                                            controllersOrder,
                                          ) +
                                          ' hover:brightness-125 hover:scale-[1.02]'
                                        : ''
                                    }`}
                                    style={{
                                      width: `${40 * group.count}px`,
                                      transition: 'all 0.2s ease',
                                    }}
                                  >
                                    {displayValue}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </div>
              {group.notes && group.notes.trim() !== '' && (
                <p className="mt-4 mb-4 flex flex-col">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 sm:text-sm text-xs font-medium">
                    <FaInfoCircle className="h-4 w-4 flex-shrink-0" />
                    {group.notes}
                  </span>
                </p>
              )}
              <p className="text-gray-500 text-sm mt-4">
                Last Updated {group.lastUpdated}
              </p>
            </motion.div>
          );
        })}
      </div>
      <p className="mb-4 flex justify-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
          <FaExclamationTriangle className="h-4 w-4" />
          Refresh the page regularly to see the latest changes
        </span>
      </p>
      {/* anchored popup */}
      {selectedCell && (
        <StaffingPopup
          selectedCell={selectedCell}
          onClose={() => setSelectedCell(null)}
        />
      )}
    </section>
  );
}
