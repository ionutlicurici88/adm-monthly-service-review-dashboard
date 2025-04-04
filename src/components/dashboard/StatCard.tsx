
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
}

const StatCard = ({
  title,
  value,
  description,
  className,
  isPercentage = false,
  colorThreshold,
}: StatCardProps) => {
  const getColorClass = () => {
    if (!colorThreshold || typeof value !== "number") return "";

    if (value >= colorThreshold.good) return "text-dashboard-accent-green";
    if (value >= colorThreshold.medium) return "text-dashboard-accent-yellow";
    return "text-dashboard-accent-red";
  };

  const displayValue = isPercentage && typeof value === "number" ? `${value}%` : value;

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="p-4 bg-gray-50">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className={cn("text-2xl font-semibold", getColorClass())}>
          {displayValue}
        </div>
        {description && <CardDescription className="mt-1 text-xs">{description}</CardDescription>}
      </CardContent>
    </Card>
  );
};

export default StatCard;
