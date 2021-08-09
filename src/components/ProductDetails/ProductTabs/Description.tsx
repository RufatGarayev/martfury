import React from 'react';
import DescImg from '../../../assets/img/product-details/description-pic.jpg';

const Description: React.FC = () => {
    return (
        <div className="tabContent-description">
            <h6>Embodying the Raw, Wayward Spirit of Rock 'N' Roll</h6>
            <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll,
                the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall,
                unplugs the chords, and takes the show on the road.
            </p>
            <p className="mb-4">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
                The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
            <div className="img-wrapper">
                <img src={DescImg} alt="description-img" />
            </div>
            <h6 className="mt-4">What do you get</h6>
            <p>Sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
                The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
            <p>
                The FM radio is perhaps gone for good, the assumption apparently being that the jury has ruled in favor of streaming over the internet.
                The IR blaster is another feature due for retirement – the S6 had it, then the Note5 didn’t, and now with the S7 the trend is clear.
            </p>
            <h6>Perfectly Done</h6>
            <p>
                Meanwhile, the IP68 water resistance has improved from the S5,
                allowing submersion of up to five feet for 30 minutes,
                plus there’s no annoying flap covering the charging port
            </p>
            <p>
                If you’ve taken the phone for a plunge in the bath, you’ll need to dry the charging port before plugging in.
                Samsung hasn’t reinvented the wheel with the design of the Galaxy S7, but it didn’t need to.
                The Gala S6 was an excellently styled device, and the S7 has managed to improve on that.
            </p>
        </div>
    )
}

export default Description;