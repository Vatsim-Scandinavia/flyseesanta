import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function timeToMinutes(time: string) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

interface ScheduleEntry {
  name: string;
  start: string;
  end: string;
}

interface SelectedCell {
  positionName: string;
  controllerName: string;
  startMinutes: number;
  endMinutes: number;
  schedule: ScheduleEntry[];
}

interface StaffingPopupProps {
  selectedCell: SelectedCell | null;
  onClose: () => void;
}

const StaffingPopup: React.FC<StaffingPopupProps> = ({
  selectedCell,
  onClose,
}) => {
  const [nowMinutes, setNowMinutes] = useState(() => {
    const now = new Date();
    return now.getUTCHours() * 60 + now.getUTCMinutes();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setNowMinutes(now.getUTCHours() * 60 + now.getUTCMinutes());
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

  if (!selectedCell) return null;

  const { positionName, controllerName, startMinutes, endMinutes, schedule } =
    selectedCell;

  // Find current index in schedule
  const idx = schedule.findIndex(
    (x) =>
      x.name === controllerName &&
      timeToMinutes(x.start) === startMinutes &&
      timeToMinutes(x.end) === endMinutes,
  );

  const prev = idx > 0 ? schedule[idx - 1].name : '—';
  const next = schedule[idx + 1]?.name || '—';

  // Determine current status and time info
  let status = '';
  let statusClasses = '';
  let infoLabel = '';
  let infoValue = '';

  if (nowMinutes >= startMinutes && nowMinutes < endMinutes) {
    const minsLeft = endMinutes - nowMinutes;
    status = 'Active';
    statusClasses = 'text-emerald-500';
    infoLabel = 'Time left';
    infoValue = `${minsLeft} min`;
  } else if (nowMinutes < startMinutes) {
    const minsUntil = startMinutes - nowMinutes;
    status = 'Upcoming';
    statusClasses = 'text-yellow-500';
    infoLabel = 'Starts in';

    if (minsUntil >= 60) {
      const hours = Math.floor(minsUntil / 60);
      const minutes = minsUntil % 60;
      infoValue = `${hours}h ${minutes}m`;
    } else {
      infoValue = `${minsUntil} min`;
    }
  } else {
    // Already ended
    status = 'Finished';
    statusClasses = 'text-red-600';
    infoLabel = 'Ended at';
    infoValue = `${Math.floor(endMinutes / 60)
      .toString()
      .padStart(2, '0')}:${(endMinutes % 60).toString().padStart(2, '0')} UTC`;
  }

  // Format start and end times nicely
  const formatTime = (minutes: number) =>
    `${Math.floor(minutes / 60)
      .toString()
      .padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}`;

  return (
    <Transition appear show={!!selectedCell} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        {/* Dialog panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95 translate-y-2"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-2"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Position
                  </p>
                  <h3 className="text-lg font-semibold text-gray-200">
                    {positionName}
                  </h3>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Time
                  </p>
                  <h3 className="text-lg font-semibold text-gray-200">
                    {formatTime(startMinutes)} – {formatTime(endMinutes)}
                  </h3>
                </div>

                {/* Status Chip */}
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Status
                  </p>
                  <div
                    className={`inline-block rounded-full text-lg font-semibold ${statusClasses}`}
                  >
                    {status}
                  </div>
                </div>
              </div>

              {/* Controller Timeline */}
              <div className="flex items-center justify-center gap-2 mb-5 text-sm">
                <span
                  className={`px-3 py-1 rounded-full border border-gray-600 text-gray-400 ${
                    prev === '—' ? 'opacity-50' : ''
                  }`}
                >
                  {prev}
                </span>
                <FaArrowRight className="text-gray-500" />
                <span className="px-3 py-1 rounded-full bg-emerald-600/30 text-emerald-300 font-semibold border border-emerald-600/40">
                  {controllerName}
                </span>
                <FaArrowRight className="text-gray-500" />
                <span
                  className={`px-3 py-1 rounded-full border border-gray-600 text-gray-400 ${
                    next === '—' ? 'opacity-50' : ''
                  }`}
                >
                  {next}
                </span>
              </div>

              {/* Info Section */}
              <div className="space-y-3 text-sm text-gray-300 text-center">
                <div>
                  <span className="block text-gray-400 text-xs uppercase">
                    {infoLabel}
                  </span>
                  <span className="text-base text-gray-200 font-medium">
                    {infoValue}
                  </span>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default StaffingPopup;
