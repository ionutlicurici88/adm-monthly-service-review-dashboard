
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
  selectedMonthId: number;
  onMonthChange: (monthId: number) => void;
}

const MonthSelector = ({
  months,
  selectedMonthId,
  onMonthChange,
}: MonthSelectorProps) => {
  return (
    <Select
      value={selectedMonthId.toString()}
      onValueChange={(value) => onMonthChange(parseInt(value))}
    >
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Months</SelectLabel>
          <SelectItem value="0">All Months</SelectItem>
          <SelectItem value="-1">All Months (excludes Sprint 1)</SelectItem>
          {months.map((month) => (
            <SelectItem key={month.id} value={month.id.toString()}>
              {month.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MonthSelector;
