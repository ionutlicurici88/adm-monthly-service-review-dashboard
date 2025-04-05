
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sprint } from "@/types/dashboard";

interface SprintSelectorProps {
  sprints: Sprint[];
  selectedSprintId: number;
  onSprintChange: (sprintId: number) => void;
}

const SprintSelector = ({
  sprints,
  selectedSprintId,
  onSprintChange,
}: SprintSelectorProps) => {
  return (
    <Select
      value={selectedSprintId.toString()}
      onValueChange={(value) => onSprintChange(parseInt(value))}
    >
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select Sprint" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sprints</SelectLabel>
          <SelectItem value="0">All Sprints (Grand Total)</SelectItem>
          <SelectItem value="-1">All Sprints (Excluding Sprint 1)</SelectItem>
          {sprints.map((sprint) => (
            <SelectItem key={sprint.id} value={sprint.id.toString()}>
              Sprint {sprint.number}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SprintSelector;

