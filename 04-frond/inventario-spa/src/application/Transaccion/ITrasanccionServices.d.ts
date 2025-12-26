import type { TransaccionDto } from "../../domain/Transaccion/TransaccionDto";

export interface ITransaccionServices {
    createTransaccionAsync: (transaccion:  TransaccionDto) => Promise<void>;
    getTransaccionASync: (transaccionFilter: TransaccionFilterDto) => Promise<ResponseDto<TransaccionResponseList[]>>;
    
}