export type IndividualMember = {
  personal_information: {
    full_name: string;
    title: string;
    nationality: string;
  };
  membership_details: {
    membership_type: string;
    membership_status: string;
    application_progress: number;
  };
  // Add other fields as needed
};

export type InstitutionalMember = {
  institution_information: {
    name: string;
    address: {
      city: string;
      country: string;
    };
    contact_details: {
      email: string;
      telephone: string;
    };
  };
  membership_details: {
    membership_type: string;
    membership_status: string;
    application_progress: number;
  };
  // Add other fields as needed
};
