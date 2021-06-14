import {NhanVien} from './NhanVien.js'

export class LaoCong extends NhanVien {

    constructor(name)
    {
        super(name)
    }

    congViec() {
        console.log('cong viec')
    }
    tinhLuong ()  {
       return super.tinhLuong() + 2000;
    }
}

export const arrSinhVien = [{ma:1,ten:'a'},{ma:2,ten:'b'}];

//export default moi file chi su dung duoc 1 lenh va khi import co the rename ma ko can viet dung ten

export default LaoCong ; 
