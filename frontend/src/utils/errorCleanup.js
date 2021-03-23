// String manipulation function that tidies up the error codes for display
// Due to the given strings from the backend the function isn't very general
const errorCleanup = (errorMsg) => {
  let { FieldName, MessageCode } = errorMsg;
  MessageCode += ":";

  if (FieldName.startsWith("AddressDetails."))
    FieldName = FieldName.slice("AddressDetails.".length);

  if (FieldName.startsWith("PhoneNumbers")) {
    FieldName = FieldName.replace("s", "").replace("[", "").replace("]", "");
    FieldName =
      FieldName.slice(0, -1) + (parseInt(FieldName.slice(-1)) + 1).toString();
  }

  if (MessageCode.includes("_")) MessageCode = MessageCode.replaceAll("_", "");

  if (MessageCode.startsWith("InvalidEmailAddress")) {
    FieldName = "";
    MessageCode = MessageCode.slice(0, -1);
  }

  FieldName = FieldName.split(/(?=[A-Z])/).join(" ");
  MessageCode = MessageCode.split(/(?=[A-Z])/).join(" ");

  return `${MessageCode} ${FieldName}`.trim();
};

module.exports = errorCleanup;
