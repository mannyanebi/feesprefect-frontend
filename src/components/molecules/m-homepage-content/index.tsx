import Container from 'components/atoms/a-container';
import FeesprefectMadam from 'images/svg/Feesprefect Madam.svg';
import React from 'react';

function HomepageContent() {
    return (
        <Container className="flex flex-col-reverse space-y-5 md:flex-row space-x-6 p-3 md:p-[5rem] items-center">
            <div className="text-center md:text-left w-full md:w-2/5 flex flex-col space-y-4">
                <h1 className="text-[2rem] md:text-[3.5rem] md:leading-[4.5rem]">
                    Manage student school fees and records with <strong>Feesprefect</strong>
                </h1>
                <p className=" text-md md:text-xl">
                    Feesprefect allows you to mitigate errors in the your school fees payment processing and reduce the
                    hours spent calculating employee hours.
                </p>
                <button
                    type="button"
                    className="bg-black text-white p-2 mx-auto rounded-md w-[6rem] text-base md:text-xl"
                >
                    Begin
                </button>
            </div>
            <div className="pb-6 md:mb-0 md:w-3/5 md:px-[3rem]">
                <img src={FeesprefectMadam} className="mx-auto w-full md:w-[60%]" alt="accountant-illustration" />
            </div>
        </Container>
    );
}

export default HomepageContent;
