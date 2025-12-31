function formatDateTime(dateValue) {
        const date = new Date(dateValue);

        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();

        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "pm" : "am";

        hours = hours % 12 || 12;

        return `${day} ${month} ${year}, at ${hours}:${minutes}${ampm}`;
    }
export {formatDateTime}