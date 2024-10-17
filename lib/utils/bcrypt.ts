import bcrypt from "bcrypt";
const saltRounds = 8;
type IHash = {
    status: boolean,
    error: string,
    hashed: string
}
export const encryptPassword = async (plaintextPassword: string) => {
    const hashPass: IHash = {
        status: false,
        error: "hashing failed",
        hashed: ""
    };
    try {
        await bcrypt.hash(plaintextPassword, saltRounds).then(function (hash: string) {
            // Store hash in your password DB.
            hashPass.hashed = hash;
            hashPass.error = "No error";
            hashPass.status = true;
        });
        console.log("hashing successfully")
        return hashPass;
    } catch (error) {
        console.log(error);
        return hashPass
    }


}
export const comparePassword = async (plaintextPassword: string, hashedPassword: string) => {
    console.log("in compare pass", plaintextPassword, hashedPassword)
    try {
        let results = false;
        await bcrypt.compare(plaintextPassword, hashedPassword).then(function (result: boolean) {
            console.log("in compare bcry", result)
            results = result;
        });
        return results;
    } catch (error) {
        console.log(error)
    }
}