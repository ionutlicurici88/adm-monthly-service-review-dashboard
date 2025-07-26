
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
}

const MonthSelector = ({
  months,
  selectedMonthId,
  onMonthChange,
}: MonthSelectorProps) => {
  // Get the label for the current selection for the trigger
  const getMonthLabel = (monthId: string) => {
    if (monthId === "grand_total") return "All Months (Grand Total)";
    if (monthId === "grand_total_excluding_feb_delta") return "All Months (GT excluding February Delta)";
    
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
          <SelectItem value="grand_total_excluding_feb_delta">All Months (GT excluding February Delta)</SelectItem>
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
