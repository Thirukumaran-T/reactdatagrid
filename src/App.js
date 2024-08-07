import React, { useState } from 'react';
import { Button, Dialog, DialogContent, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import { Visibility, Edit, Delete, CheckCircle, Cancel, HourglassEmpty } from '@mui/icons-material';
import Slide from '@mui/material/Slide';
import './App.css';

const data = {
  active_staffs: [
    {
      staff_name: "vj",
      role: 1,
      is_active: true,
      staff_id: "00000163",
      is_doctor: false,
      emp_id: "V00001"
    },
    {
      role: 2,
      is_active: true,
      staff_id: "00000103",
      doctor_name: "Dr.Vijay",
      is_doctor: true,
      emp_id: "D00001"
    },
    {
      staff_name: "testNurse",
      role: 3,
      is_active: true,
      staff_id: "00000029",
      is_doctor: false,
      emp_id: "T00001"
    },
    {
      staff_name: "TestUser001",
      role: 4,
      is_active: true,
      staff_id: "00000170",
      is_doctor: false,
      emp_id: "T00002"
    }
  ],
  inactive_staffs: [
    {
      role: 2,
      is_active: false,
      staff_id: "00000032",
      doctor_name: "Dr.NurseQwerty",
      is_doctor: true,
      emp_id: "N00001"
    },
    {
      staff_name: "New User",
      role: 4,
      is_active: false,
      staff_id: "00000169",
      is_doctor: false,
      emp_id: "N00002"
    },
    {
      staff_name: "Sithik",
      role: 4,
      is_active: false,
      staff_id: "00000025",
      is_doctor: false,
      emp_id: "S00003"
    },
    {
      role: 4,
      is_active: false,
      staff_id: "00000017",
      doctor_name: "Dr.Stalin",
      is_doctor: true,
      emp_id: "S00002"
    }
  ],
  invited_staffs: [
    {
      staff_name: "prabhu",
      invite_id: "vfXoMLPDN0FkqNd3iAfUJwObiLrUcI",
      role: 4,
      is_expired: true,
      invite_status: 0,
      is_doctor: false
    },
    {
      staff_name: "Dr.Sithik",
      invite_id: "iXWrcqXL1cl53w1k1aHSqdf3IREM3p",
      role: 2,
      is_expired: true,
      staff_id: "00000025",
      invite_status: 0,
      is_doctor: true
    },
    {
      staff_name: "Dr.Sithik",
      invite_id: "zDR3J4i7zGUrgMGKrCTu5d0ISQUgce",
      role: 2,
      is_expired: true,
      staff_id: "00000025",
      invite_status: 0,
      is_doctor: true
    },
    {
      staff_name: "Dr.Stalin",
      invite_id: "iu6vhmBO3YrMkMeFR9RFQS4dAlKSA1",
      role: 2,
      is_expired: true,
      staff_id: "00000017",
      invite_status: 2,
      is_doctor: true
    },
    {
      staff_name: "Dr.Sithik",
      invite_id: "aGE5KqKPZAsx6c7Ice6lmtIJtLbOCE",
      role: 2,
      is_expired: true,
      staff_id: "00000025",
      invite_status: 3,
      is_doctor: true
    },
    {
      staff_name: "dcd",
      invite_id: "tN5XBFAW4dnjBgnS4vgL1UZdlRzzSK",
      role: 3,
      is_expired: true,
      invite_status: 3,
      is_doctor: false
    },
    {
      staff_name: "xyz",
      invite_id: "IUmKDnTkcD2gZ58OTnQ8XargcAtvkX",
      role: 3,
      is_expired: true,
      invite_status: 3,
      is_doctor: false
    },
    {
      staff_name: "Stalin",
      invite_id: "NQywpW6ZjVZoxPwtiI2Or0Y4Tz8lKM",
      role: 1,
      is_expired: true,
      staff_id: "00000021",
      invite_status: 3,
      is_doctor: false
    },
    {
      staff_name: "Vishnu",
      invite_id: "34iZmggH72S76yZCfHv5Apx4DBE2ex",
      role: 3,
      is_expired: true,
      invite_status: 3,
      is_doctor: false
    },
    {
      staff_name: "Nurse 123",
      invite_id: "jIjCWDf0PffW2LpdivjbYW8Rk13xAO",
      role: 3,
      is_expired: true,
      invite_status: 3,
      is_doctor: false
    },
    {
      staff_name: "Dr.Sithik",
      invite_id: "8tNCn2CuBDDKske7EF543z3gyyvK5Q",
      role: 2,
      is_expired: true,
      staff_id: "00000025",
      invite_status: 3,
      is_doctor: true
    },
    {
      staff_name: "abc",
      invite_id: "PCSFFFcFQiHOy0b8soqk1no5FEWkJv",
      role: 1,
      is_expired: true,
      staff_id: "00000019",
      invite_status: 3,
      is_doctor: false
    },
    {
      staff_name: "Dr.Devosh M",
      invite_id: "6XTgh86WVEalxkPrBJqcxOYd3Wg6mn",
      role: 1,
      is_expired: true,
      staff_id: "00000044",
      invite_status: 3,
      is_doctor: true
    },
    {
      staff_name: "Dr.Sithik",
      invite_id: "rcHMAwmOJYPiZQZdAhvEfXBC8YOB8F",
      role: 2,
      is_expired: true,
      staff_id: "00000025",
      invite_status: 3,
      is_doctor: true
    },
    {
      staff_name: "abd",
      invite_id: "p6vxwxgqzFtFvA9fiBNvr0o1056lqZ",
      role: 4,
      is_expired: true,
      invite_status: 3,
      is_doctor: false
    },
    {
      staff_name: "ASD",
      invite_id: "1srg9bebiTYxeTZYJrzHTA2a12BisO",
      role: 4,
      is_expired: true,
      invite_status: 3,
      is_doctor: false
    },
    {
      staff_name: "Dr.Stalin",
      invite_id: "k4tSNHFMJuA6S60b9XfeYgrAahEWm8",
      role: 2,
      is_expired: true,
      staff_id: "00000017",
      invite_status: 3,
      is_doctor: true
    }
  ]
};

const roles = {
  1: 'SuperUser',
  2: 'Doctor',
  3: 'Nurse',
  4: 'Receptionist'
};

const inviteStatus = {
  0: 'Pending',
  2: 'Rejected',
  3: 'Withdrawn'
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderStatusIcon = (isActive, inviteStatusValue) => {
    if (isActive !== undefined) {
      return isActive ? (
        <Tooltip title="Active">
          <CheckCircle color="success" />
        </Tooltip>
      ) : (
        <Tooltip title="Inactive">
          <Cancel color="error" />
        </Tooltip>
      );
    }

    switch (inviteStatusValue) {
      case 0:
        return (
          <Tooltip title="Pending">
            <HourglassEmpty color="primary" />
          </Tooltip>
        );
      case 2:
        return (
          <Tooltip title="Rejected">
            <Cancel color="error" />
          </Tooltip>
        );
      case 3:
        return (
          <Tooltip title="Withdrawn">
            <Cancel color="warning" />
          </Tooltip>
        );
      default:
        return null;
    }
  };

  const renderTableRows = (staffArray, isInvited = false) => {
    return staffArray.map((staff, index) => (
      <TableRow key={index}>
        <TableCell>{staff.emp_id || staff.staff_id || staff.invite_id}</TableCell>
        <TableCell>{staff.staff_name || staff.doctor_name}</TableCell>
        <TableCell>{roles[staff.role]}</TableCell>
        <TableCell>{renderStatusIcon(staff.is_active, staff.invite_status)}</TableCell>
        <TableCell>
          <Tooltip title="View">
            <IconButton>
              <Visibility />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Manage Clinic Staffs
      </Button>
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} maxWidth="lg" fullWidth>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            Manage Clinic Staffs
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderTableRows(data.active_staffs)}
              {renderTableRows(data.inactive_staffs)}
              {renderTableRows(data.invited_staffs, true)}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
