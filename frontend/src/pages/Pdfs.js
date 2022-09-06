import React from 'react'

const Pdfs = () => {
  return (
    <div class='container my-4'>
    <table id="pdf_table_id" class="display">
        <thead>
            <tr>
                <th>PDF Name</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="w-75">sfsfs</td>
                <td><a href="{{pdf.link}}" class="btn btn-success">View/Download</a></td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default Pdfs