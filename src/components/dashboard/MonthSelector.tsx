
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
  return (
    <Select
      value={selectedMonthId}
      onValueChange={(value) => onMonthChange(value)}
    >
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Months</SelectLabel>
          <SelectItem value="grand_total">All Months (Grand Total)</SelectItem>
          <SelectItem value="total">All Months (Excluding Sprint 1)</SelectItem>
          {months.map((month) => (
            <SelectItem key={month.id} value={month.id}>
              {month.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MonthSelector;
