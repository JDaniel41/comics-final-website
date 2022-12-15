import React from "react";
import { Modal, Button } from "flowbite-react";

export default function CoverLetter() {
    const [show, setShow] = React.useState(false);

    const onClick = () => {
        setShow(!show);
    };

    const onClose = () => {
        setShow(false);
    };
    return (
        <React.Fragment>
            <Button onClick={onClick} className="m-auto">
                Read our Cover Letter!
            </Button>
            <Modal show={show} onClose={onClose}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            In Fall 2022, we took HON 2010: The Cultural Works
                            of Comics together. Through that class, we learned
                            more about the different ways that comics can
                            perform cultural work, and more importantly we got
                            to bond over their shared love of comics! For our
                            final project, we were challenged to pitch an idea
                            for our own comic that would perform some cultural
                            work. Both of us are really passionate about mental
                            health, so we knew we wanted to tell a story that
                            shows the reality of dealing with stress, and more
                            importantly, encourages readers to recognize their
                            support systems. As a fan of the tabletop adventure
                            role-playing series Fantasy High, we wanted to adapt
                            this universe and its characters into something
                            meaningful. Instead of focusing heavily on
                            world-building, we wanted to put our energy into
                            depicting a story full of adventure, heartache, and
                            discovery (both of this imaginary world and of the
                            characters themselves). The world of Fantasy High
                            allows readers to detach themselves from the real
                            world, yet remain relatable for a young adult
                            audience. The characters encounter magical spells,
                            monsters, and magical items while also balancing
                            social norms, school work, and family life. With our
                            world nailed down, we decided to think of ways that
                            we could naturally integrate everyday struggles into
                            our story. We especially wanted to make sure that we
                            normalized that anyone can experience these
                            struggles, so we looked for ways that we could also
                            tie in our experiences as National Scholars at
                            Clemson University. With that in mind, we realized
                            that Adaine would be the perfect character to embody
                            this, as her character and family seem like someone
                            who would not have any problems or worries. One
                            example of us presenting her in this manner is the
                            faculty awards dinner, where the school recognizes
                            her for being a high-achieving student, and the
                            reader is reminded of her father being the
                            Ambassador. Given that our goal is to make sure that
                            we convey that anyone can experience mental health
                            struggles, we wanted to build her character as
                            someone who, from the outside looking in, seems like
                            they have it all figured out. However, as the story
                            later goes on, there will be moments that show that
                            even individuals in these positions also need help
                            sometimes. Once you learn about the scandal behind
                            the KNB Bank and the Cult of the Nightmare King, you
                            will begin to see how this scandal affects Adaine.
                            For example, when she first fights the Sandpeople g
                            The overall aesthetic of this comic book series is
                            very light-hearted. The writing of this story,
                            similar to Fantasy High, is filled with humorous
                            situations, hilarious dialogue, and uplifting
                            messages. We chose a cartoon-like style for the main
                            artwork to stay true to the story’s original roots.
                            However, we brought in some other artists to
                            highlight the complex nature of this series. For
                            example, Mark Ledgerwood is serving as what we have
                            coined our ‘divination artist’. During scenes when
                            Adaine is performing magical spells, she enters into
                            a somewhat dreamscape that reflects her subconscious
                            and her magical powers. Ledgerwood’s abstract
                            interpretation of the human form allows for the
                            creation of this magical world. These two very
                            distinct art styles reflect the duality of Adaine’s
                            world. She is excelling in school and is well-loved
                            by her professors and friends; however, she is still
                            living in the shadow of her older sister and remains
                            burdened by her anxiety.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onClick}>I accept</Button>
                    <Button color="gray" onClick={onClick}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}
