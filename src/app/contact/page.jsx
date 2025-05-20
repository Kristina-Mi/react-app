export default function Contact() {
    return(
        <div className="flex flex-col gap-y-3 justify-self-center">
            <p className="text-3xl mb-1 text-center">Contacts</p>
            <div className="flex flex-col gap-y-1 text-left">
                <p><a className="font-semibold">Phone number:</a> 8-800-555-35-35</p>
                <p><a className="font-semibold">Email:</a> sherlock-baker@mail.ru</p>
                <p><a className="font-semibold">Address:</a> Baker street, 221B</p>
                <p><a className="font-semibold">Opening hours:</a> Everyday, 10:00 - 22:00</p>
            </div>
        </div>
    )
}