import { CellContext } from "@tanstack/react-table";
import { Item } from "@/features/drivers/types";
import { Tooltip } from "@gouvfr-lasuite/ui-components";
import { timeAgo } from "@/features/explorer/utils/utils";
import { Draggable } from "@/features/explorer/components/Draggable";
import { useDisableDragGridItem } from "@/features/explorer/components/embedded-explorer/hooks";

export const CreatedCell = (params: CellContext<Item, unknown>) => {
  const item = params.row.original;
  const disableDrag = useDisableDragGridItem(item);
  const createdAt = item.file_created_at ?? item.created_at;

  return (
    <Draggable id={params.cell.id} item={item} disabled={disableDrag}>
      <div className="explorer__grid__item__cell-value">
        <Tooltip content={createdAt.toLocaleString()}>
          <span>{timeAgo(new Date(createdAt))}</span>
        </Tooltip>
      </div>
    </Draggable>
  );
};
