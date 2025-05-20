export default function Contact() {
    return(
        <div className="flex flex-row gap-x-7 items-center">
            <img className="w-1/2 h-1/2" src="restaurant.jpg" alt="restaurant"/>
            <div className="flex flex-col gap-y-3 justify-self-center">
                <p className="text-3xl mb-1 text-center">About us</p>
                <div className="flex flex-col gap-y-5 text-left">
                    <p>Nestled in the heart of London, Sherlock's Bistro is not just a restaurant; it's an experience that tantalizes the senses and ignites the imagination. Owned by the legendary detective Sherlock Holmes, this unique establishment combines the art of fine dining with the intrigue of detective work.</p>
                    <p>As you step inside, the ambiance transports you to the Victorian era, with rich mahogany furnishings, dim lighting, and walls adorned with memorabilia from Holmes' most famous cases. The bistro features an open kitchen where guests can witness the culinary magic unfold, as chefs craft exquisite dishes inspired by the diverse flavors of the world.</p>
                    <p>The menu at Sherlock's Bistro is a carefully curated selection of seasonal ingredients, reflecting Holmes' keen attention to detail. Signature dishes include "The Baker Street Beef Wellington," a perfectly cooked filet wrapped in flaky pastry, and "The Hound of the Baskervilles Seafood Platter," showcasing the freshest catches of the day. For dessert, patrons can indulge in "The Case of the Missing Tiramisu," a delightful twist on the classic Italian treat.</p>
                </div>
            </div>
        </div>
    )
}