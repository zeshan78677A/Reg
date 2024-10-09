import { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [radioButtonsGroup, setRadioButtonsGroup] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validate = (inputTag) => {
    const { name, value } = inputTag;
    if (name === "firstName") {
      setFirstName(value);
      setIsFirstNameValid(!/^[a-zA-Z\s]+$/.test(value));
    } else if (name === "email") {
      setEmail(value);
      setIsEmailValid(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));
    }
  };

  const handleSubmission = () => {
    if (firstName && address && email && radioButtonsGroup && dob && course) {
      alert(`Registered Successfully\nName: ${firstName}\nAddress: ${address}\nE-mail: ${email}\nGender: ${radioButtonsGroup}\nDate of Birth: ${dob}\nCourse: ${course}`);
    } else {
      alert("Fill the form completely");
    }
  };

  const handleReset = () => {
    setFirstName('');
    setAddress('');
    setEmail('');
    setRadioButtonsGroup('');
    setDob('');
    setCourse('');
    setIsFirstNameValid(false);
    setIsEmailValid(false);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-lg-4"></div>
        <div className='border rounded col-lg-4 mt-4'>
          <h1 className='text-center mt-4'>Registration Form</h1>
          <p className="fs-5 text-center fw-bold">For Higher Secondary Education</p>
          <form action="" className='p-3'>
            {/* 1st name */}
            <div>
              <TextField
                onChange={e => validate(e.target)}
                name='firstName'
                value={firstName}
                className='w-100'
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </div>
            {isFirstNameValid && <div className="text-danger mt-1">*Enter Your Name</div>}

            {/* Address */}
            <div className="mt-3">
              <TextField
                onChange={e => setAddress(e.target.value)}
                name='address'
                value={address}
                className='w-100'
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </div>

            {/* Email */}
            <div className="mt-3">
              <TextField
                onChange={e => validate(e.target)}
                name='email'
                value={email}
                className='w-100'
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
            {isEmailValid && <div className="text-danger mt-1">*Invalid E-mail ID</div>}

            {/* Gender */}
            <div className='mt-3'>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  className='mt-2'
                  name="radioButtonsGroup"
                  value={radioButtonsGroup}
                  onChange={e => setRadioButtonsGroup(e.target.value)}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>

            {/* DOB */}
            <div className="mt-3">
              <p className='ms-1'>Date of Birth:</p>
              <TextField
                onChange={e => setDob(e.target.value)}
                name='dob'
                type='date'
                value={dob}
                className='w-100'
                id="outlined-basic"
                variant="outlined"
                InputLabelProps={{ shrink: true }} // To display the label when a date is selected
              />
            </div>

            {/* Course */}
            <div className="mt-3">
              <select
                onChange={e => setCourse(e.target.value)}
                name="course"
                value={course}
                className='w-100 p-3'
              >
                <option value="" hidden disabled>Courses</option>
                <option value="biology">Biology</option>
                <option value="computer-science">Computer Science</option>
                <option value="commerce">Commerce</option>
                <option value="humanities">Humanities</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="mt-3">
              <Stack direction={"row"} spacing={2}>
                <Button
                  onClick={handleSubmission}
                  className='w-50 p-3 bg-dark'
                  variant="contained"
                >
                  Register
                </Button>
                <Button
                  onClick={handleReset}
                  className='w-50 p-3'
                  variant="outlined"
                >
                  Reset
                </Button>
              </Stack>
            </div>
          </form>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default App;
