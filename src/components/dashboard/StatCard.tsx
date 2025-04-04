
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  className?: string;
  isPercentage?: boolean;
  colorThreshold?: {
    good: number;
    medium: number;
  };
  tooltip?: string;
}

const StatCard = ({
  title,
  value,
  description,
  className,
  isPercentage = false,
  colorThreshold,
  tooltip,
}: StatCardProps) => {
  // Get color based on percentage value
  const getColorClass = () => {
    if (!colorThreshold || typeof value !== "number") return "";

    if (value >= colorThreshold.good) return "text-dashboard-accent-green";
    if (value >= colorThreshold.medium) return "text-dashboard-accent-yellow";
    return "text-dashboard-accent-red";
  };

  // Get circle color based on percentage value
  const getCircleColor = () => {
    if (!isPercentage || typeof value !== "number") return "";
    
    if (value >= 100) return "bg-green-600"; // 100% - Dark Green
    if (value >= 90) return "bg-green-500"; // 90-99% - Green
    if (value >= 85) return "bg-yellow-400"; // 85-89% - Yellow
    if (value >= 80) return "bg-orange-400"; // 80-84% - Orange
    if (value >= 75) return "bg-orange-500"; // 75-79% - Dark Orange
    if (value < 75) return "bg-red-500"; // Below 75% - Red
    
    return "";
  };

  const displayValue = isPercentage && typeof value === "number" ? `${value}%` : value;

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="p-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
          {tooltip && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-help text-gray-400 hover:text-gray-600">
                  <InfoIcon className="w-4 h-4" />
                </span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs text-xs">
                {tooltip}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          {isPercentage && typeof value === "number" && (
            <div className={cn("w-3 h-3 rounded-full", getCircleColor())}></div>
          )}
          <div className={cn("text-2xl font-semibold", getColorClass())}>
            {displayValue}
          </div>
        </div>
        {description && <CardDescription className="mt-1 text-xs">{description}</CardDescription>}
      </CardContent>
    </Card>
  );
};

export default StatCard;
