import useInput from "../../hooks/useInput";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";

export default function AddFriend({ onClose }: { onClose: () => void }) {
  const [email, handlEemail] = useInput('');

  return (
    <Modal title="Add Friend" onClose={onClose}>
      <form action="">
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" value={email} onChange={handlEemail} placeholder="example@gmail.com" />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Add Friend</Button>
        </div>
      </form>
    </Modal>
  )
}