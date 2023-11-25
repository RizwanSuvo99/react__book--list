/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

export default function BookRow(props) {
  const { title, author, isbn, pubYear } = props.book;

  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{isbn}</td>
      <td>{pubYear}</td>
      <td onClick={() => props.handleDelete(isbn)} className="delete-btn">
        <MdDelete color="red" />
      </td>
    </tr>
  )
}
