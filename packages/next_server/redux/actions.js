import { getServerSideProps } from "../service/api"

export const StoreData = () => {
    console.log("storedata")
    return  async (dispatch) => {

        const data  = await getServerSideProps();

    }
}

