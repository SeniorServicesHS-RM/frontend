import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default function TimeAndDate() {
  const [date, setDate] = useState(new Date());
  const day = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];
  const month = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober ",
    "November",
    "Dezember",
  ];
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <Card
      sx={{
        padding: 3,
        fontSize: 22,
        margin: 3,
        bgcolor: "primary.light",
        maxHeight: 175,
        minWidth: 150,
      }}
    >
      <Stack spacing={2} direction="column" alignItems={"center"}>
        <AccessTimeIcon color="primary" fontSize="large" />
        <Typography
          sx={{
            fontSize: 45,
            color: "primary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {date.toLocaleTimeString("de-DE")}
        </Typography>
        <Typography>
          {day[date.getDay()] +
            " " +
            date.getDate() +
            " " +
            month[date.getMonth()] +
            " " +
            date.getFullYear()}
        </Typography>
      </Stack>
    </Card>
  );
}
