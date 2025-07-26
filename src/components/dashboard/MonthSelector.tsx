
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Month } from "@/types/dashboard";
import { getFullMonthName } from "@/utils/format-utils";

interface MonthSelectorProps {
  months: Month[];
  selectedMonthId: string;
  onMonthChange: (monthId: string) => void;
  viewType?: "month" | "ta";
}

const MonthSelector = ({
  months,
  selectedMonthId,
  onMonthChange,
  viewType = "month",
}: MonthSelectorProps) => {
  // Get the label for the current selection for the trigger
  const getMonthLabel = (monthId: string) => {
    if (monthId === "grand_total") return "All Months (Grand Total)";
    if (monthId === "total" && viewType === "month") return "All Months (Excluding Jan & Feb S1)";
    if (monthId === "grand_total_excluding_feb_delta" && viewType === "ta") return "All Months (Excluding February Delta)";
    
    const month = months.find(m => m.id === monthId);
    return month ? getFullMonthName(month.id) : "Select Month";
  };
  
  return (
    <Select
      value={selectedMonthId}
      onValueChange={(value) => onMonthChange(value)}
    >
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select Month">
          {getMonthLabel(selectedMonthId)}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Months</SelectLabel>
          <SelectItem value="grand_total">All Months (Grand Total)</SelectItem>
          {viewType === "month" && (
            <SelectItem value="total">All Months (Excluding Jan & Feb S1)</SelectItem>
          )}
          {viewType === "ta" && (
            <SelectItem value="grand_total_excluding_feb_delta">All Months (Excluding February Delta)</SelectItem>
          )}
          {months.map((month) => (
            <SelectItem key={month.id} value={month.id}>
              {getFullMonthName(month.id)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MonthSelector;
