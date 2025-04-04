
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  compact?: boolean;
}

const StatCard = ({
  title,
  value,
  description,
  className,
  isPercentage = false,
  colorThreshold,
  tooltip,
  compact = false,
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
  const circleColorClass = getCircleColor();
  const textColorClass = circleColorClass ? circleColorClass.replace('bg-', 'text-') : getColorClass();

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className={cn("bg-gray-50", compact ? "p-2" : "p-4")}>
        <div className="flex items-center justify-between">
          <CardTitle className={cn("text-gray-500", compact ? "text-xs" : "text-sm", "font-medium")}>{title}</CardTitle>
          {tooltip && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-default">
                </span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs text-xs">
                {tooltip}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </CardHeader>
      <CardContent className={cn(compact ? "p-2" : "p-4")}>
        <div className="flex items-center gap-2">
          {isPercentage && typeof value === "number" && (
            <div className={cn("rounded-full", circleColorClass, compact ? "w-5 h-5" : "w-4 h-4")}></div>
          )}
          <div className={cn(compact ? "text-xl" : "text-2xl", "font-semibold", textColorClass)}>
            {displayValue}
          </div>
        </div>
        {description && <CardDescription className={cn("mt-1", compact ? "text-[10px]" : "text-xs")}>{description}</CardDescription>}
      </CardContent>
    </Card>
  );
};

export default StatCard;
