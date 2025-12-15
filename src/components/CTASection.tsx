import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Notification02Icon,
  CheckmarkCircle02Icon,
  InformationCircleIcon,
  Alert02Icon,
  CancelCircleIcon,
  Tick02Icon,
  Delete02Icon,
} from "hugeicons-react";
import { notifications } from "../../data/mockData";
import clsx from "clsx";

const NotificationDropdown: React.FC = () => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckmarkCircle02Icon size={20} className="text-green-500" />;
      case "warning":
        return <Alert02Icon size={20} className="text-yellow-500" />;
      case "error":
        return <CancelCircleIcon size={20} className="text-red-500" />;
      default:
        return <InformationCircleIcon size={20} className="text-blue-500" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50";
      case "warning":
        return "bg-yellow-50";
      case "error":
        return "bg-red-50";
      default:
        return "bg-blue-50";
    }
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              "p-2 rounded-full transition-all duration-200 relative focus:outline-none",
              open
                ? "bg-primary-50 text-primary-600"
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            )}
          >
            <Notification02Icon size={24} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            )}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-50 mt-2 w-80 sm:w-96 transform px-4 sm:px-0">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 bg-white">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Notifications
                    </h3>
                    <p className="text-xs text-gray-500">
                      You have {unreadCount} unread messages
                    </p>
                  </div>
                  {unreadCount > 0 && (
                    <button className="text-xs font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 transition-colors">
                      <Tick02Icon size={14} />
                      Mark all read
                    </button>
                  )}
                </div>

                <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                  {notifications.length > 0 ? (
                    <div className="divide-y divide-gray-50">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={clsx(
                            "p-4 hover:bg-gray-50 transition-colors cursor-pointer group",
                            !notification.read ? "bg-primary-50/30" : "bg-white"
                          )}
                        >
                          <div className="flex gap-3">
                            <div
                              className={clsx(
                                "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                                getBgColor(notification.type)
                              )}
                            >
                              {getIcon(notification.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start mb-1">
                                <p
                                  className={clsx(
                                    "text-sm font-semibold truncate pr-2",
                                    !notification.read
                                      ? "text-gray-900"
                                      : "text-gray-700"
                                  )}
                                >
                                  {notification.title}
                                </p>
                                <span className="text-xs text-gray-400 whitespace-nowrap">
                                  {notification.time}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                {notification.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      <Notification02Icon
                        size={48}
                        className="mx-auto text-gray-300 mb-3"
                      />
                      <p>No notifications yet</p>
                    </div>
                  )}
                </div>

                <div className="p-3 border-t border-gray-100 bg-gray-50/50 text-center">
                  <button className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center gap-1 mx-auto w-full py-1">
                    <Delete02Icon size={14} />
                    Clear all notifications
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default NotificationDropdown;
