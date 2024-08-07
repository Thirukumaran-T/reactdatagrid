import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StatusIcon from './StatusIcon';

const roleMap = {
  1: 'SuperUser',
  2: 'Doctor',
  3: 'Nurse',
  4: 'Receptionist'
};

const ManageClinicStaffs = ({ data }) => {
  const rows = [
    ...data.active_staffs.map((staff) => ({
      id: staff.staff_id,
      emp_id: staff.emp_id,
      name: staff.is_doctor ? staff.doctor_name : staff.staff_name,
      role: roleMap[staff.role],
      statusIcon: <StatusIcon is_active={staff.is_active} />
    })),
    ...data.inactive_staffs.map((staff) => ({
      id: staff.staff_id,
      emp_id: staff.emp_id,
      name: staff.is_doctor ? staff.doctor_name : staff.staff_name,
      role: roleMap[staff.role],
      statusIcon: <StatusIcon is_active={staff.is_active} />
    })),
    ...data.invited_staffs.map((staff, index) => ({
      id: `invite-${index}`,
      emp_id: staff.staff_id || `INV-${index}`,
      name: staff.staff_name,
      role: roleMap[staff.role],
      statusIcon: <StatusIcon is_active={false} invite_status={staff.invite_status} />
    }))
  ];

  const columns = [
    { field: 'emp_id', headerName: 'Employee ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'statusIcon', headerName: 'Status', width: 100, renderCell: (params) => params.value },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: () => (
        <>
          <IconButton color="primary">
            <VisibilityIcon />
          </IconButton>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
          <IconButton color="secondary">
            <DeleteIcon />
          </IconButton>
        </>
      )
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Manage Clinic Staffs</h1>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default ManageClinicStaffs;
