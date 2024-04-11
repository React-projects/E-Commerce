import UserAllOrdersItem from './UserAllOrdersItem'
import { Row } from "react-bootstrap";

const UserAllOrder = () => {
    return (
        <div>
        <div className="admin-content-text pb-4">اهلا محمد على</div>
        <Row className='justify-content-between'>
           <UserAllOrdersItem />
           <UserAllOrdersItem />
           <UserAllOrdersItem />
        </Row>
        </div>
    )
}

export default UserAllOrder