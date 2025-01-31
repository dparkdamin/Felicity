import { useState } from "react";

const { ScheduleContainer, Header, AppointmentContainer, FstColumn, Column, Group, Date, TimeEmail, EditIcon, DeleteIcon, DoctorEmail } = require("./styles");

const DATA = [
    {
        id: 1,
        date: "9/3",
        time: "8:00 AM",
        doctor: "Dr. Oliver",
        email: "oliver@burrito.com"
    }
    ,
    {
        id: 2,
        date: "9/3",
        time: "8:00 AM",
        doctor: "Dr. Oliver",
        email: "oliver@burrito.com"
    }
];

export const Schedule = () => {
    // const [data, setData] = useState([]);
    return (
        <ScheduleContainer>
            <Header>My Schedule</Header>
            {DATA.map((data) => (
                <AppointmentContainer>
                    <FstColumn>
                        <Group>
                            <Date>{data.date}</Date>
                            <TimeEmail>{data.time}</TimeEmail>
                        </Group>
                        <Group>
                            <DeleteIcon>DELETE</DeleteIcon>
                            <EditIcon>EDIT</EditIcon>
                        </Group>
                    </FstColumn>
                    <Column>
                        <DoctorEmail>{data.doctor}</DoctorEmail>
                    </Column>
                    <Column>
                        <DoctorEmail>Email:</DoctorEmail>
                        <TimeEmail>{data.email}</TimeEmail>
                    </Column>
                </AppointmentContainer>

            ))}
        </ScheduleContainer>
    );
}

export default Schedule;