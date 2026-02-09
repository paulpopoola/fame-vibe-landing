import { Resend } from "resend";

const resend = new Resend("re_XoHJwVX4_3Tu8VkMsX3vLXuTrZwowC79Y"); // Replace with actual key

(async function () {
  const { data, error } = await resend.emails.send({
    from: "Vibe <hello@vibe.famehubhq.site>",
    to: "popoolapaultemitope1@gmail.com", // Use your email
    subject: "Test Email",
    html: "<p>If you receive this, Resend is working!</p>",
  });

  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Success!", data);
  }
})();
