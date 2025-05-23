import usuarios from "../../data/usuarios.json"
import TablaData from "../../components/tablas/TablaData";
import UserIcon from "../../components/icons/UserIcon";
import EditPencil from "../../components/icons/EditPencil";
import ViewEye from "../../components/icons/ViewEye";
import TrashBote from "../../components/icons/TrashBote";
import AddPlusIcon from "../../components/icons/AddPlusIcon";

const columns = [
  {
    header: "Id",
    accessorKey: "id",
    enableSorting: true,
    size: 10,
  },
  {
    header: "Nombre Completo",
    accessorFn: row => `${row.nombre} ${row.apellidos}`,
    id: "nombre_completo",
    cell: info => info.getValue(),
    enableSorting: true,
    size: 200,
  },
  {
    header: "Celular",
    accessorKey: "celular",
    enableSorting: true,
    size: 140,
  },
  {
    header: "Foto",
    accessorKey: "foto_perfil",
    cell: ({ getValue }) => (
      <img
        src={getValue()}
        alt="foto"
        className="h-10 w-10 object-cover rounded-full justify-self-center"
      />
    ),
    size: 80,
  },
  {
    header: "Estado",
    accessorKey: "estado",
    cell: ({ getValue }) => {
      const estado = getValue();
      const isActive = estado === true;
      return (
        <div className="w-full flex justify-center items-center" >
          <span
            className={`inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-xs
          ${isActive
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
              }`}
          >
            {isActive ? 'Activo' : 'Desactivado'}
          </span>
        </div>
      );
    },
    size: 120,
  },
  {
    header: "Acciones",
    cell: ({ row }) => (
      <div className="flex items-center justify-center w-full gap-4">
        <button
          className="text-PrimaryDarkGray bg-PrimaryShadowWhite/50 rounded-full p-2 
               hover:bg-white hover:text-blue-500 
               transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={() => alert(`Ver ${row.original.id}`)}
        >
          <ViewEye />
        </button>
        <button
          className="text-PrimaryDarkGray bg-PrimaryShadowWhite/50 rounded-full p-2 
               hover:bg-white hover:text-yellow-500 
               transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={() => alert(`Editar ${row.original.id}`)}
        >
          <EditPencil />
        </button>
        <button
          className="text-PrimaryDarkGray bg-PrimaryShadowWhite/50 rounded-full p-2 
               hover:bg-white hover:text-red-500 
               transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={() => alert(`Eliminar ${row.original.id}`)}
        >
          <TrashBote />
        </button>
      </div>

    ),
    size: 140,
  },
];


const UserList = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-8">
        <h3 className="text-2xl font-bold text-PrimaryBlue">Lista de Usuarios</h3>
        <a href="#" class="inline-flex items-center justify-center gap-2 rounded-lg transition font-semibold px-6 py-3 bg-PrimaryWhite text-PrimaryBlue ring-2 ring-inset ring-PrimaryWhiteGray hover:bg-PrimaryShadowWhite ">
          <div className="flex gap-2">
            <AddPlusIcon />
            <span>Agregar Usuario</span>
          </div>
        </a>
      </div>
      <div className="bg-PrimaryWhite p-4 m-4 rounded-sm">
        <TablaData data={usuarios} columns={columns} />
      </div>
    </>
  );
}

export default UserList;
