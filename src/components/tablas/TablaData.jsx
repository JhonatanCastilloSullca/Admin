import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import UpChevronIcon from '../icons/UpChevronIcon';
import DownChevronIcon from '../icons/DownChevronIcon';
import SearchIcon from '../icons/SearchIcon';

const TablaData = ({ data, columns }) => {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4">

      <div className="flex gap-2 px-4 py-2 flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-PrimaryGray">Ver</span>
          <div className="relative z-20 bg-transparent">
            <select
              value={table.getState().pagination.pageSize}
              onChange={e => table.setPageSize(Number(e.target.value))}
              className="w-full py-2 pl-3 pr-8 text-sm text-PrimaryBlue bg-transparent border border-PrimaryWhiteGray rounded-lg appearance-none h-9 shadow-theme-xs focus:border-PrimaryBlue focus:outline-hidden focus:ring-1"
            >
              {[5, 8, 10].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span className="absolute z-30 text-PrimaryGray -translate-y-1/2 right-2 top-1/2 ">
              <DownChevronIcon size={15} />
            </span>
          </div>
          <span className="text-PrimaryGray">Filas</span>
        </div>

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-PrimaryGray">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-10 pr-4 py-2 border border-PrimaryGray rounded-lg text-base w-full text-PrimaryGray focus:border-PrimaryBlue focus:outline-hidden focus:ring-1"
            value={globalFilter ?? ''}
            onChange={e => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>



      <div className="overflow-auto rounded-md border border-PrimaryShadowWhite">
        <table className="min-w-full table-fixed divide-y divide-PrimaryShadowWhite">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={
                      `px-4 py-2 text-left text-sm font-medium text-gray-700 cursor-pointer select-none ${header.id === 'id' ? 'w-[10px] px-0' : ''}${header.id === 'nombre_completo' ? 'w-[200px]' : ''}${header.id === 'celular' ? 'w-[140px]' : ''}${header.id === 'foto_perfil' ? 'w-[80px]' : ''}${header.id === 'estado' ? 'w-[120px]' : ''}${header.column.columnDef.header === 'Acciones' ? 'w-[140px]' : ''}`
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >

                    <div className="flex justify-between items-center ">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() === 'asc' && (
                        <UpChevronIcon size={20} />
                      )}
                      {header.column.getIsSorted() === 'desc' && (
                        <DownChevronIcon size={20} />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-PrimaryShadowWhite">
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? '' : 'bg-PrimaryShadowWhite'}
              >
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-4 py-2 text-sm text-PrimaryBlue whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border border-t-0 rounded-b-xl border-PrimaryWhiteGray py-4 pl-[18px] pr-4">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center justify-center gap-4 xl:justify-start">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="flex h-10 items-center gap-2 rounded-lg border border-PrimaryWhiteGray bg-PrimaryWhite p-2 sm:p-2.5 text-PrimaryBlue shadow-theme-xs hover:bg-PrimaryWhiteGray hover:text-PrimaryBlue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <ul className="flex items-center gap-1">
              {Array.from({ length: table.getPageCount() }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => table.setPageIndex(i)}
                    className={`px-4 py-2 rounded flex w-10 items-center justify-center h-10 text-sm font-medium
                ${table.getState().pagination.pageIndex === i
                        ? 'bg-PrimaryWhiteGray text-PrimaryBlue'
                        : 'text-PrimaryBlue bg-PrimaryWhite hover:bg-PrimaryGray hover:text-brand-500'
                      }`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="flex h-10 items-center gap-2 rounded-lg border border-PrimaryWhiteGray bg-PrimaryWhite p-2 sm:p-2.5 text-PrimaryBlue shadow-theme-xs hover:bg-PrimaryWhiteGray hover:text-PrimaryDarkBlue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          <div className="pt-3 xl:pt-0">
            <p className="pt-3 text-sm font-medium text-center text-PrimaryBlue border-t border-PrimaryWhiteGray  xl:border-t-0 xl:pt-0 xl:text-left">
              Mostrando{' '}
              {table.getRowModel().rows.length > 0
                ? table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1
                : 0}{' '}
              a{' '}
              {Math.min(
                (table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize,
                data.length
              )}{' '}
              de {data.length} registros
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TablaData;
