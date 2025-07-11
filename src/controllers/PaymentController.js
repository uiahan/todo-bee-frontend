import axios from "axios";
import Swal from "sweetalert2";
import AuthController from "./AuthController";

const baseUrl = import.meta.env.VITE_API_URL;

const PaymentController = () => {
  const getSnapToken = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${baseUrl}/payment/token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data.token;
    } catch (err) {
      console.error("Gagal mendapatkan Snap Token:", err);
      throw err;
    }
  };

  const payWithMidtrans = async () => {
    try {
      const snapToken = await getSnapToken();

      if (window.snap) {
        window.snap.pay(snapToken, {
          onSuccess: async (result) => {
            console.log("Pembayaran sukses", result);

            Swal.fire({
              icon: "success",
              title: "Berhasil",
              text: "Pembayaran berhasil. Invoice akan segera didownload!",
            }).then(() => {
              const orderId = result.order_id;

              window.open(`${baseUrl}/invoice/download/${orderId}`, "_blank");

              const { logout } = AuthController.getState();
              logout();

              window.location.href = "/login";
            });
          },
          onPending: (result) => {
            console.log("Menunggu pembayaran", result);
          },
          onError: (error) => {
            console.error("Pembayaran gagal", error);
            Swal.fire({
              icon: "error",
              title: "Gagal",
              text: "Terjadi kesalahan saat pembayaran.",
            });
          },
          onClose: () => {
            console.log("Popup ditutup oleh user");
          },
        });
      } else {
        alert("Midtrans Snap belum terload.");
      }
    } catch {
      console.error("Terjadi kesalahan saat memproses pembayaran.");
    }
  };

  return {
    getSnapToken,
    payWithMidtrans,
  };
};

export default PaymentController;
