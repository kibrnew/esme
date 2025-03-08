const API_BASE_URL = "https://emes-api.onrender.com/api";

// Store the auth token
let authToken: string | null = null;

// Set the auth token
export const setAuthToken = (token: string) => {
  authToken = token;
  // You might want to store this in localStorage for persistence across page refreshes
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token);
  }
};

// Get the auth token (useful when initializing the app)
export const getAuthToken = (): string | null => {
  if (!authToken && typeof window !== "undefined") {
    authToken = localStorage.getItem("authToken");
  }
  return authToken;
};

// Clear the auth token (for logout)
export const clearAuthToken = () => {
  authToken = null;
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
  }
};

// Get headers with auth token if available
const getHeaders = (contentType = "application/json") => {
  const headers: Record<string, string> = {
    "Content-Type": contentType,
  };

  if (authToken) {
    headers["Authorization"] = `Token ${authToken}`;
  }

  return headers;
};

async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
}

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    headers: getHeaders(),
  });
  return handleResponse(response);
};

export const fetchPublications = async () => {
  const response = await fetch(`${API_BASE_URL}/publications`, {
    headers: getHeaders(),
  });
  return handleResponse(response);
};

export const fetchAwards = async () => {
  const response = await fetch(`${API_BASE_URL}/awards`, {
    headers: getHeaders(),
  });
  return handleResponse(response);
};

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/contacts`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(formData),
  });
  return handleResponse(response);
};

export const login = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/login/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(credentials),
  });
  const data = await handleResponse(response);
  if (data.token) {
    setAuthToken(data.token);
  }
  return data;
};

export const register = async (userData: {
  username: string;
  password: string;
  full_name: string;
  sex: string;
  date_of_birth: string;
  nationality: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/register/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(userData),
  });
  const data = await handleResponse(response);
  if (data.token) {
    setAuthToken(data.token);
  }
  return data;
};

export const updateUserAddress = async (addressData: {
  residential: string;
  city: string;
  country: string;
  zip_code: string;
  employer: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/user/update/add_address/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(addressData),
  });
  return handleResponse(response);
};

export const updateUserContact = async (contactData: {
  email: string;
  phone_number: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/user/update/add_contact/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(contactData),
  });
  return handleResponse(response);
};

export const updateUserEducation = async (educationData: {
  highest_degree: string;
  field_of_study: string;
  degree_file: string;
  university: string;
  graduation_year: string;
  specialization: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/user/update/add_education/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(educationData),
  });
  return handleResponse(response);
};

export const updateUserProfessionalExperience = async (experienceData: {
  organization: string;
  position: string;
  key_responsibilities: string;
  start_time: string;
  end_time: string;
}) => {
  const response = await fetch(
    `${API_BASE_URL}/user/update/add_professional_experience/`,
    {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(experienceData),
    }
  );
  return handleResponse(response);
};

export const updateUserPublications = async (publicationData: {
  title: string;
  journal: string;
  date: string;
}) => {
  const response = await fetch(
    `${API_BASE_URL}/user/update/add_publications/`,
    {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(publicationData),
    }
  );
  return handleResponse(response);
};

export const updateUserProjects = async (projectData: {
  title: string;
  description: string;
  start: string;
  end: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/user/update/add_projects/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(projectData),
  });
  return handleResponse(response);
};

export const updateUserPatents = async (patentData: {
  title: string;
  description: string;
  date: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/user/update/add_patents/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(patentData),
  });
  return handleResponse(response);
};

export const updateUserAwards = async (awardData: {
  title: string;
  awarding_body: string;
  year: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/user/update/add_awards/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(awardData),
  });
  return handleResponse(response);
};

// Add more API functions as needed
