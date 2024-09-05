import featured from "@/utills/featured";
import common from "@/utills/common"
import router from "@/router";

const data = {
    getData(){
        const route = router.currentRoute;
        const data = (route.params.type == 'common') ? common : featured;
        const pageData = data.filter(item => {
            return item.name === route.params.name;
        })
        return pageData;
    }
}

export default data