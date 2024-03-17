"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, priorities, statuses } from "../_data/data"
import { Task } from "../_data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import Link from "next/link"



export const columns: ColumnDef<Task>[] = [

  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Wallet" />
    ),

    cell: ({ row }) => <Link href={`/profiles/${row.getValue("id")}`} className="w-[80px] underline">{row.getValue("id")}</Link>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "points",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Points" />
    ),

    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("points")}
          </span>
        </div>
      )
    },
  },

]
