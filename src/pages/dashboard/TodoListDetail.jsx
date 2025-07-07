import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SubtaskController from "../../controllers/SubtaskController";

function TodoListDetail() {
  const { id: taskId } = useParams();
  const { deleteSubtask } = SubtaskController();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSubtask, setCurrentSubtask] = useState(null);
  const [form, setForm] = useState({ title: "" });

  const [tasks, setTasks] = useState({
    pending: [],
    progress: [],
    done: [],
  });

  const openAddModal = () => {
    setIsEditing(false);
    setForm({ title: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (subtask) => {
    setIsEditing(true);
    setCurrentSubtask(subtask);
    setForm({ title: subtask.text });
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    Swal.fire({
      title: "Menyimpan...",
      text: "Mohon tunggu sebentar",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      if (isEditing) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/subtask/update/${currentSubtask.id}`,
          form,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/subtask/store`,
          {
            task_id: taskId,
            title: form.title,
            status: "pending",
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: isEditing
          ? "Subtask berhasil diupdate."
          : "Subtask berhasil ditambahkan.",
        timer: 2000,
        showConfirmButton: false,
      });

      setIsModalOpen(false);
      fetchSubtasks();
    } catch (err) {
      console.error("Gagal simpan subtask", err);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat menyimpan subtask.",
      });
    }
  };

  const fetchSubtasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/subtask/index/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;

      setTasks({
        pending: data.pending.map((item) => ({
          id: String(item.id),
          text: item.title,
        })),
        progress: data.progress.map((item) => ({
          id: String(item.id),
          text: item.title,
        })),
        done: data.done.map((item) => ({
          id: String(item.id),
          text: item.title,
        })),
      });
    } catch (err) {
      console.error("Gagal memuat subtask", err);
    }
  };

  useEffect(() => {
    fetchSubtasks();
  }, [taskId]);

  const handleDeleteSubtask = async (id) => {
    const result = await Swal.fire({
      title: "Yakin ingin menghapus?",
      text: "Data tidak bisa dikembalikan setelah dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Menghapus...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        await deleteSubtask(id);
        await fetchSubtasks();
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Subtask berhasil dihapus.",
        });
      } catch {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Terjadi kesalahan saat menghapus.",
        });
      }
    }
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceColumn = [...tasks[source.droppableId]];
    const destColumn =
      source.droppableId === destination.droppableId
        ? sourceColumn
        : [...tasks[destination.droppableId]];

    const [movedItem] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedItem);

    setTasks((prev) => ({
      ...prev,
      [source.droppableId]:
        source.droppableId === destination.droppableId
          ? destColumn
          : sourceColumn,
      ...(source.droppableId !== destination.droppableId && {
        [destination.droppableId]: destColumn,
      }),
    }));

    if (source.droppableId !== destination.droppableId) {
      const token = localStorage.getItem("token");
      axios
        .put(
          `${import.meta.env.VITE_API_URL}/subtask/${
            movedItem.id
          }/update-status`,
          { status: destination.droppableId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          console.log("Status berhasil diperbarui");
        })
        .catch((err) => {
          console.error("Gagal update status", err);
        });
    }
  };

  const columns = [
    { key: "pending", title: "Pending" },
    { key: "progress", title: "In Progress" },
    { key: "done", title: "Done" },
  ];

  return (
    <>
      <div className="bg-gray-900 mb-6 py-5 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-white">Todo List Detail</h1>
      </div>

      <button
        onClick={openAddModal}
        className="font-medium bg-yellow-400 hover:bg-yellow-500 text-white text-lg px-4 py-2 rounded-md mb-6"
      >
        Tambah Subtask
      </button>
      {isModalOpen && (
        <div className="fixed px-6 inset-0 bg-black/40 flex items-center justify-center z-50">
          <div
            className="bg-gray-900 p-6 rounded-md shadow-lg w-full max-w-md"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2 className="text-xl font-bold mb-4 text-white">
              {isEditing ? "Edit Subtask" : "Tambah Subtask"}
            </h2>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ title: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded mb-4 text-white"
              placeholder="Judul subtask"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div
              className="bg-gray-900 rounded-md p-5 min-h-[200px] flex flex-col"
              key={col.key}
            >
              {/* Bagian Judul dan Garis */}
              <h2 className="font-semibold text-center text-xl text-white mb-3">
                {col.title}
              </h2>
              <hr className="text-gray-300 mb-4" />

              {/* Bagian yang bisa di-drop */}
              <Droppable droppableId={col.key}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex-1 space-y-3 transition-all ${
                      snapshot.isDraggingOver ? "bg-yellow-200 rounded-md" : ""
                    }`}
                    style={{ minHeight: "50px" }}
                  >
                    {tasks[col.key].map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-950 px-4 py-2 flex justify-between items-center rounded-md shadow-sm"
                          >
                            <p className="text-white">{item.text}</p>
                            <div className="flex space-x-2">
                              <button
                                className="text-blue-600 text-xl"
                                onClick={() => openEditModal(item)}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </button>
                              <button
                                onClick={() => handleDeleteSubtask(item.id)}
                                className="text-red-600 text-xl"
                              >
                                <i className="fa-regular fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </>
  );
}

export default TodoListDetail;
