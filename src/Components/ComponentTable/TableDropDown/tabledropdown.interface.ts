import { DropDownTypes } from "src/common.interface";

interface Props {
  handlePerPage(value: number): void;
  select: DropDownTypes[];
  perPage: number;
}

export default Props;
