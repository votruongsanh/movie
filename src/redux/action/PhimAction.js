import axios from "axios";
import {
  CHI_TIET_PHIM,
  GET_PHIM_API,
} from "../constants/PhimConst";

export const layDanhSachPhim = (maNhom = "GP04") => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: GET_PHIM_API,
        mangPhim: [...result.data],
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: CHI_TIET_PHIM,
        chiTietPhim: result.data,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

