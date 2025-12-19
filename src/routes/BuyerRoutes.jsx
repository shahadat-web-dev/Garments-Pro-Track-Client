import LoadingSpinner from '../components/LoadingSpinner';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const BuyerRoutes = ({children}) => {
   const {user,loading} = useAuth();
    const {role,roleLoading} = useRole();
     
    if(loading || !user || roleLoading){
    
        return <LoadingSpinner/>
    
    }
    if(role !== 'buyer'){
        return <Forbidden/>
    }
    return children
};

export default BuyerRoutes;