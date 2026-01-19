import React from "react";
import { Loader2 } from "lucide-react";

interface SkeletonProps {
  count?: number;
  type?: "table" | "card";
}

export const TransactionSkeleton: React.FC<SkeletonProps> = ({
  count = 3,
  type = "table",
}) => {
  if (type === "table") {
    return (
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.from({ length: count }).map((_, i) => (
              <tr key={`skeleton-${i}`} className="animate-pulse">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="h-4 bg-gray-200 rounded w-20 ml-auto"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-8 bg-gray-200 rounded w-20 ml-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="md:hidden divide-y divide-gray-200">
      {Array.from({ length: count }).map((_, i) => (
        <div key={`skeleton-mobile-${i}`} className="p-4 animate-pulse">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="h-6 bg-gray-200 rounded w-16 mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-40 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-20"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-9 bg-gray-200 rounded flex-1"></div>
            <div className="h-9 bg-gray-200 rounded flex-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface LoadMoreIndicatorProps {
  isLoading: boolean;
  hasMore: boolean;
}

export const LoadMoreIndicator: React.FC<LoadMoreIndicatorProps> = ({
  isLoading,
  hasMore,
}) => {
  if (!hasMore) return null;

  return (
    <div className="py-8 flex justify-center items-center">
      {isLoading ? (
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm font-medium">
            Carregando mais transações...
          </span>
        </div>
      ) : (
        <div className="text-sm text-gray-500 animate-pulse">
          Role para baixo para carregar mais
        </div>
      )}
    </div>
  );
};

interface EndOfListProps {
  total: number;
  visible: number;
}

export const EndOfList: React.FC<EndOfListProps> = ({ total, visible }) => {
  if (visible === 0 || visible < total) return null;

  return (
    <div className="py-8 text-center border-t border-gray-200">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-sm font-medium text-gray-700">
          Todas as {total} transações foram carregadas
        </p>
      </div>
    </div>
  );
};
