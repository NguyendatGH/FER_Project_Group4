import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import PagerIndicator from "../components/ui/PagerIndicator";
import Button from "../components/ui/Button";
import Footer from "../components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Camera");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flashSaleTime, setFlashSaleTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  // Flash sale countdown timer
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setFlashSaleTime((prev) => {
  //       if (prev.seconds > 0) {
  //         return { ...prev, seconds: prev.seconds - 1 };
  //       } else if (prev.minutes > 0) {
  //         return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
  //       } else if (prev.hours > 0) {
  //         return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
  //       } else if (prev.days > 0) {
  //         return {
  //           ...prev,
  //           days: prev.days - 1,
  //           hours: 23,
  //           minutes: 59,
  //           seconds: 59,
  //         };
  //       }
  //       return prev;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  const categories = [
    { name: "Phones", icon: "/images/img_category_cellphone.svg" },
    { name: "Computers", icon: "/images/img_category_computer.svg" },
    { name: "SmartWatch", icon: "/images/img_category_smartwatch.svg" },
    { name: "Camera", icon: "/images/img_category_camera.svg" },
    { name: "HeadPhones", icon: "/images/img_category_headphone.svg" },
    { name: "Gaming", icon: "/images/img_category_gamepad.svg" },
  ];

  const flashSaleProducts = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 5,
      reviews: 88,
      image: "/images/img_g92_2_500x500_1.png",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: "/images/img_ak_900_01_500x500.png",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      discount: "-30%",
      rating: 5,
      reviews: 99,
      image: "/images/img_g27cq4_500x500_1.png",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: "$375",
      originalPrice: "$400",
      discount: "-25%",
      rating: 4.5,
      reviews: 99,
      image: "/images/img_sam_moghadam_kh.png",
    },
  ];

  const bestSellingProducts = [
    {
      id: 1,
      name: "The north coat",
      price: "$260",
      originalPrice: "$360",
      rating: 5,
      reviews: 65,
      image: "/images/img_672462_zah9d_56.png",
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: "$960",
      originalPrice: "$1160",
      rating: 4.5,
      reviews: 65,
      image: "/images/img_547953_9c2st_87.png",
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      rating: 4.5,
      reviews: 65,
      image: "/images/img_gammaxx_l240_argb_1_500x500.png",
    },
    {
      id: 4,
      name: "Small BookSelf",
      price: "$360",
      originalPrice: null,
      rating: 5,
      reviews: 65,
      image: "/images/img_sam_moghadam_kh_176x140.png",
    },
  ];

  const exploreProducts = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 3,
      reviews: 35,
      image: "/images/img_71rdoexxtrl_1.png",
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 4,
      reviews: 95,
      image: "/images/img_eos_250d_03_500x500.png",
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 5,
      reviews: 325,
      image: "/images/img_ideapad_gaming_3i_01_500x500.png",
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: "$500",
      rating: 4,
      reviews: 145,
      image: "/images/img_curology_j7pkvqrtusm_unsplash.png",
    },
    {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      rating: 5,
      reviews: 65,
      image: "/images/img_new_mercedes_be.png",
      isNew: true,
    },
    {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rating: 5,
      reviews: 35,
      image: "/images/img_copa_sense_1.png",
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      rating: 4.5,
      reviews: 55,
      image: "/images/img_gp11_prd3_1.png",
      isNew: true,
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: "$660",
      rating: 4.5,
      reviews: 55,
      image: "/images/img_698717_z8a1x_34.png",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img
          key={i}
          src="/images/img_vector.svg"
          alt="star"
          style={{ width: "20px", height: "20px" }}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <img
          key="half"
          src="/images/img_star_half_filled.svg"
          alt="half star"
          style={{ width: "20px", height: "20px" }}
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <img
          key={`empty-${i}`}
          src="/images/img_vector_black_900.svg"
          alt="empty star"
          style={{ width: "20px", height: "20px" }}
        />
      );
    }

    return stars;
  };

  const ProductCard = ({ product, showAddToCart = false }) => (
    <div
      className="d-flex flex-column align-items-center"
      style={{ maxWidth: "500px" }}
    >
      <div
        className="position-relative bg-light rounded p-3 w-100"
        style={{ height: "320px" }}
      >
        {product.discount && (
          <div
            className="position-absolute top-0 start-0 bg-danger text-white rounded px-2 py-1"
            style={{ fontSize: "12px" }}
          >
            {product.discount}
          </div>
        )}
        {product.isNew && (
          <div
            className="position-absolute top-0 start-0 bg-success text-white rounded px-2 py-1"
            style={{ fontSize: "12px" }}
          >
            NEW
          </div>
        )}
        <div className="position-absolute top-0 end-0 d-flex flex-column gap-2 p-2">
          <button
            className="btn btn-light p-2 rounded-circle"
            style={{ backgroundColor: "#f8f9fa" }}
            onMouseOver={(e) =>
              e.currentTarget.classList.add("bg-danger", "text-white")
            }
            onMouseOut={(e) =>
              e.currentTarget.classList.remove("bg-danger", "text-white")
            }
          >
            <img
              src="/images/img_wishlist.svg"
              alt="wishlist"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
          <button
            className="btn btn-light p-2 rounded-circle"
            style={{ backgroundColor: "#f8f9fa" }}
            onMouseOver={(e) =>
              e.currentTarget.classList.add("bg-danger", "text-white")
            }
            onMouseOut={(e) =>
              e.currentTarget.classList.remove("bg-danger", "text-white")
            }
          >
            <img
              src="/images/img_quick_view.svg"
              alt="quick view"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid"
          style={{ maxHeight: "100%", objectFit: "contain" }}
        />
        {showAddToCart && (
          <div className="position-absolute bottom-0 start-0 end-0 bg-dark text-white text-center py-2 rounded-bottom">
            Add To Cart
          </div>
        )}
      </div>
      <div className="d-flex flex-column gap-2 w-100 mt-2">
        <h3
          className="text-dark"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {product.name}
        </h3>
        <div className="d-flex gap-3 align-items-center">
          <span
            className="text-danger"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {product.price}
          </span>
          {product.originalPrice && (
            <span
              className="text-muted text-decoration-line-through"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {product.originalPrice}
            </span>
          )}
        </div>
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex gap-1">{renderStars(product.rating)}</div>
          <span
            className="text-muted"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-light">
      <Header />

      {/* Navigation */}
      <div className="contaner_custom py-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <h1
              className="text-dark"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              Exclusive
            </h1>
            <div className="d-flex flex-column flex-lg-row gap-3 ms-4">
              <div className="d-flex flex-column align-items-center">
                <p
                  className="text-dark mb-0"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  Home
                </p>
                <img
                  src="/images/img_underline.svg"
                  alt="underline"
                  style={{ width: "48px", height: "1px" }}
                />
              </div>
              <p
                className="text-dark mb-0"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
              >
                Contact
              </p>
              <p
                className="text-dark mb-0"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
              >
                About
              </p>
              <p
                className="text-dark mb-0"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
              >
                Sign Up
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center mt-3 mt-lg-0">
            <div className="input-group" style={{ maxWidth: "58%" }}>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="form-control"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  color: "#6c757d",
                  borderColor: "#ced4da",
                }}
              />
              <span className="input-group-text bg-light border-0">
                <img
                  src="/images/img_search.svg"
                  alt="search"
                  style={{ width: "24px", height: "24px" }}
                />
              </span>
            </div>
            <div className="d-flex gap-3 ms-3">
              <img
                src="/images/img_wishlist.svg"
                alt="wishlist"
                style={{ width: "32px", height: "32px" }}
              />
              <img
                src="/images/img_cart1.svg"
                alt="cart"
                style={{ width: "32px", height: "32px" }}
              />
            </div>
          </div>
        </div>
        <hr className="my-2" />
      </div>

      {/* Main Content */}
      <div className="contaner_custom py-4">
        <div className="heroSection">
          {/* Sidebar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              padding: "16px 0",
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#212529",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                }}
              >
                Woman's Fashion
              </p>
              <img
                src="/images/img_dropdown_black_900.svg"
                alt="dropdown"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#212529",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                }}
              >
                Men's Fashion
              </p>
              <img
                src="/images/img_dropdown_black_900.svg"
                alt="dropdown"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <p
              style={{
                margin: 0,
                color: "#212529",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
              }}
            >
              Electronics
            </p>
            <p
              style={{
                margin: 0,
                color: "#212529",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
              }}
            >
              Home & Lifestyle
            </p>
            <p
              style={{
                margin: 0,
                color: "#212529",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
              }}
            >
              Medicine
            </p>
            <p
              style={{
                margin: 0,
                color: "#212529",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
              }}
            >
              Sports & Outdoor
            </p>
            <p
              style={{
                margin: 0,
                color: "#212529",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
              }}
            >
              Baby's & Toys
            </p>
            <p
              style={{
                margin: 0,
                color: "#212529",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
              }}
            >
              Groceries & Pets
            </p>
            <p
              style={{
                margin: 0,
                color: "#212529",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
              }}
            >
              Health & Beauty
            </p>
          </div>
          <div
            className="line"
            style={{
              width: "1px",
              backgroundColor: "#6c757d",
              margin: "0 20px",
            }}
          ></div>
          {/* Hero Slider */}

          <div className="col-12 col-lg-9 position-relative py-4">
            <div
              className="bg-dark-true rounded w-100"
              style={{ height: "440px" }}
            >
              <div className="d-flex flex-column flex-lg-row align-items-center h-100 p-4">
                <div
                  className="d-flex flex-column gap-4"
                  style={{ maxWidth: "42%" }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src="/images/img_1200px_apple_gray_logo.png"
                      alt="Apple"
                      style={{ width: "40px", height: "48px" }}
                    />
                    <p
                      className="text-white mb-0 ms-3"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      iPhone 14 Series
                    </p>
                  </div>
                  <h2
                    className="text-white"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "48px",
                      fontWeight: "600",
                      lineHeight: "1.2",
                    }}
                  >
                    Up to 10% off Voucher
                  </h2>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-column align-items-center"
                      style={{ width: "20%" }}
                    >
                      <p
                        className="text-white mb-0"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Shop Now
                      </p>
                      <div
                        style={{
                          width: "80px",
                          height: "1px",
                          backgroundColor: "#fff",
                        }}
                      ></div>
                    </div>
                    <img
                      src="/images/img_arrow_right.svg"
                      alt="arrow"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginLeft: "8px",
                      }}
                    />
                  </div>
                </div>
                <img
                  src="/images/img_hero_endframe.png"
                  alt="iPhone"
                  className="img-fluid"
                  style={{
                    maxWidth: "52%",
                    height: "328px",
                    objectFit: "contain",
                    marginLeft: "-64px",
                  }}
                />
              </div>
            </div>
            <div className="position-absolute bottom-0 start-50 translate-middle-x">
              <PagerIndicator totalPages={5} currentPage={currentSlide} />
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sales Section */}
      <div className="contaner_custom py-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 d-flex flex-column gap-3">
            <div className="d-flex align-items-center">
              <div
                className="bg-danger rounded"
                style={{ width: "20px", height: "40px" }}
              ></div>
              <p
                className="text-danger ms-3 mb-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Today's
              </p>
            </div>
            <h2
              className="text-dark"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "36px",
                fontWeight: "600",
              }}
            >
              Flash Sales
            </h2>
            <div className="d-flex gap-3 align-items-center mt-2">
              <div className="d-flex flex-column">
                <p
                  className="text-dark mb-0"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Days
                </p>
                <p
                  className="text-dark mb-0"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "32px",
                    fontWeight: "700",
                  }}
                >
                  {String(flashSaleTime.days).padStart(2, "0")}
                </p>
              </div>
              <img
                src="/images/img_semiclone.svg"
                alt="colon"
                style={{ width: "4px", height: "16px", marginBottom: "20px" }}
              />
              <div className="d-flex flex-column">
                <p
                  className="text-dark mb-0"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Hours
                </p>
                <p
                  className="text-dark mb-0"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "32px",
                    fontWeight: "700",
                  }}
                >
                  {String(flashSaleTime.hours).padStart(2, "0")}
                </p>
              </div>
              <img
                src="/images/img_semiclone.svg"
                alt="colon"
                style={{ width: "4px", height: "16px", marginBottom: "20px" }}
              />
              <div className="d-flex flex-column">
                <p
                  className="text-dark mb-0"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Minutes
                </p>
                <p
                  className="text-dark mb-0"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "32px",
                    fontWeight: "700",
                  }}
                >
                  {String(flashSaleTime.minutes).padStart(2, "0")}
                </p>
              </div>
              <img
                src="/images/img_semiclone.svg"
                alt="colon"
                style={{ width: "4px", height: "16px", marginBottom: "20px" }}
              />
              <div className="d-flex flex-column">
                <p
                  className="text-dark mb-0"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Seconds
                </p>
                <p
                  className="text-dark mb-0"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "32px",
                    fontWeight: "700",
                  }}
                >
                  {String(flashSaleTime.seconds).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-end gap-2 mt-3 mt-lg-0">
            <button
              className="btn btn-light p-2 rounded-circle"
              style={{ backgroundColor: "#f8f9fa" }}
              onMouseOver={(e) =>
                e.currentTarget.classList.add("bg-danger", "text-white")
              }
              onMouseOut={(e) =>
                e.currentTarget.classList.remove("bg-danger", "text-white")
              }
            >
              <img
                src="/images/img_arrow_left.svg"
                alt="previous"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <button
              className="btn btn-light p-2 rounded-circle"
              style={{ backgroundColor: "#f8f9fa" }}
              onMouseOver={(e) =>
                e.currentTarget.classList.add("bg-danger", "text-white")
              }
              onMouseOut={(e) =>
                e.currentTarget.classList.remove("bg-danger", "text-white")
              }
            >
              <img
                src="/images/img_arrow_right_black_900.svg"
                alt="next"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          </div>
        </div>
        <div className="row mt-4 overflow-auto">
          <div className="flashSale productsection">
            {flashSaleProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0">
                <ProductCard
                  product={product}
                  showAddToCart={product.id === 2}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Button variant="secondary" size="large">
            View All Products
          </Button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="contaner_custom py-5">
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 d-flex flex-column gap-3">
            <div className="d-flex align-items-center">
              <div
                className="bg-danger rounded"
                style={{ width: "20px", height: "40px" }}
              ></div>
              <p
                className="text-danger ms-3 mb-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Categories
              </p>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center">
              <h2
                className="text-dark mb-0"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                Browse By Category
              </h2>
              <div className="d-flex gap-2 ms-auto mt-3 mt-lg-0">
                <button
                  className="btn btn-light p-2 rounded-circle"
                  style={{ backgroundColor: "#f8f9fa" }}
                  onMouseOver={(e) =>
                    e.currentTarget.classList.add("bg-danger", "text-white")
                  }
                  onMouseOut={(e) =>
                    e.currentTarget.classList.remove("bg-danger", "text-white")
                  }
                >
                  <img
                    src="/images/img_arrow_left.svg"
                    alt="previous"
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
                <button
                  className="btn btn-light p-2 rounded-circle"
                  style={{ backgroundColor: "#f8f9fa" }}
                  onMouseOver={(e) =>
                    e.currentTarget.classList.add("bg-danger", "text-white")
                  }
                  onMouseOut={(e) =>
                    e.currentTarget.classList.remove("bg-danger", "text-white")
                  }
                >
                  <img
                    src="/images/img_arrow_right_black_900.svg"
                    alt="next"
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-6 g-4 mt-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`d-flex flex-column align-items-center p-4 rounded ${
                selectedCategory === category.name
                  ? "bg-danger text-white shadow"
                  : "border border-secondary"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCategory(category.name)}
              onMouseOver={(e) =>
                !selectedCategory === category.name &&
                e.currentTarget.classList.add("bg-danger", "text-white")
              }
              onMouseOut={(e) =>
                !selectedCategory === category.name &&
                e.currentTarget.classList.remove("bg-danger", "text-white")
              }
            >
              <img
                src={category.icon}
                alt={category.name}
                style={{ width: "56px", height: "56px" }}
              />
              <p
                className="mb-0"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
              >
                {category.name}
              </p>
            </div>
          ))}
        </div>
        <hr className="my-4" />
      </div>

      {/* Best Selling Products */}
      <div className="contaner_custom py-5">
        <div className="row">
          <div className="col-12 d-flex flex-column gap-3">
            <div className="d-flex align-items-center">
              <div
                className="bg-danger rounded"
                style={{ width: "20px", height: "40px" }}
              ></div>
              <p
                className="text-danger ms-3 mb-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                This Month
              </p>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center">
              <h2
                className="text-dark mb-0"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                Best Selling Products
              </h2>
              <Button
                variant="secondary"
                size="large"
                className="ms-auto mt-3 mt-lg-0"
              >
                View All
              </Button>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mt-3">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Music Experience Banner */}
      <div className="contaner_custom py-5">
        <div className="position-relative">
          <div
            className="position-absolute rounded-circle bg-success opacity-50"
            style={{
              width: "504px",
              height: "500px",
              filter: "blur(96px)",
              right: "72px",
            }}
          ></div>
          <div className="bg-dark rounded w-100" style={{ height: "500px" }}>
            <div className="row h-100 align-items-center">
              <div className="col-12 col-lg-6 d-flex flex-column gap-4 p-4">
                <p
                  className="text-success mb-0"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Categories
                </p>
                <h2
                  className="text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "48px",
                    fontWeight: "600",
                    lineHeight: "1.2",
                  }}
                >
                  Enhance Your Music Experience
                </h2>
                <div className="timeLeft">
                  {[
                    { value: "05", label: "Days" },
                    { value: "23", label: "Hours" },
                    { value: "59", label: "Minutes" },
                    { value: "35", label: "Seconds" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="d-flex flex-column align-items-center bg-light rounded-circle p-3 timeLeft-item  "
                    >
                      <p
                        className="text-dark mb-0"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {item.value}
                      </p>
                      <p
                        className="text-dark mb-0"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "12px",
                          marginTop: "-8px",
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="large">
                  Buy Now!
                </Button>
              </div>
              <div className="col-12 col-lg-6 d-flex justify-content-center p-4">
                <img
                  src="/images/img_jbl_boombox_2_hero_020_x1.png"
                  alt="JBL Speaker"
                  className="img-fluid"
                  style={{
                    maxWidth: "568px",
                    height: "330px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Our Products */}
      <div className="contaner_custom py-5">
        <div className="row">
          <div className="col-12 d-flex flex-column gap-3">
            <div className="d-flex align-items-center">
              <div
                className="bg-danger rounded"
                style={{ width: "20px", height: "40px" }}
              ></div>
              <p
                className="text-danger ms-3 mb-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Our Products
              </p>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center">
              <h2
                className="text-dark mb-0"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "36px",
                  fontWeight: "600",
                }}
              >
                Explore Our Products
              </h2>
              <div className="d-flex gap-2 ms-auto mt-3 mt-lg-0">
                <button
                  className="btn btn-light p-2 rounded-circle"
                  style={{ backgroundColor: "#f8f9fa" }}
                  onMouseOver={(e) =>
                    e.currentTarget.classList.add("bg-danger", "text-white")
                  }
                  onMouseOut={(e) =>
                    e.currentTarget.classList.remove("bg-danger", "text-white")
                  }
                >
                  <img
                    src="/images/img_arrow_left.svg"
                    alt="previous"
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
                <button
                  className="btn btn-light p-2 rounded-circle"
                  style={{ backgroundColor: "#f8f9fa" }}
                  onMouseOver={(e) =>
                    e.currentTarget.classList.add("bg-danger", "text-white")
                  }
                  onMouseOut={(e) =>
                    e.currentTarget.classList.remove("bg-danger", "text-white")
                  }
                >
                  <img
                    src="/images/img_arrow_right_black_900.svg"
                    alt="next"
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mt-3">
          {exploreProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showAddToCart={product.id === 2}
            />
          ))}
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mt-4">
          {exploreProducts.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Button variant="secondary" size="large">
            View All Products
          </Button>
        </div>
      </div>

      {/* New Arrival Section */}
      <div className="contaner_custom py-5">
        <div className="row">
          <div className="col-12 d-flex flex-column gap-3">
            <div className="d-flex align-items-center">
              <div
                className="bg-danger rounded"
                style={{ width: "20px", height: "40px" }}
              ></div>
              <p
                className="text-danger ms-3 mb-0"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Featured
              </p>
            </div>
            <h2
              className="text-dark"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "36px",
                fontWeight: "600",
              }}
            >
              New Arrival
            </h2>
          </div>
        </div>
        <div className="row g-4 mt-3">
          {/* PlayStation 5 */}
          <div className="col-12 col-lg-6">
            <div
              className="bg-dark rounded position-relative"
              style={{ height: "622px" }}
            >
              <img
                src="/images/img_ps5_slim_goedko.png"
                alt="PlayStation 5"
                className="position-absolute img-fluid"
                style={{
                  top: "88px",
                  width: "510px",
                  height: "510px",
                  objectFit: "contain",
                }}
              />
              <div className="d-flex flex-column gap-3 p-4 position-absolute bottom-0">
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  PlayStation 5
                </h3>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    maxWidth: "48%",
                  }}
                >
                  Black and White version of the PS5 coming out on sale.
                </p>
                <div
                  className="d-flex flex-column align-items-start"
                  style={{ width: "16%" }}
                >
                  <p
                    className="text-danger mb-0"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Shop Now
                  </p>
                  <img
                    src="/images/img_underline_white_a700.svg"
                    alt="underline"
                    style={{ width: "100%", height: "1px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-6 d-flex flex-column gap-4">
            {/* Women's Collections */}
            <div
              className="position-relative bg-dark-true rounded"
              style={{ height: "284px" }}
            >
              <div
                className="d-flex flex-column gap-3 p-4"
                style={{ width: "36%" }}
              >
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  Women's Collections
                </h3>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    
                  }}
                >
                  Featured woman collections that give you another vibe.
                </p>
                <div
                  className="d-flex flex-column align-items-start"
                  style={{ width: "32%" }}
                >
                  <p
                    className="text-danger mb-0"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Shop Now
                  </p>
                  <img
                    src="/images/img_underline_white_a700.svg"
                    alt="underline"
                    style={{ width: "100%", height: "1px" }}
                  />
                </div>
              </div>
              <img
                src="/images/img_attractive_woma.png"
                alt="Woman"
                className="position-absolute img-fluid end-0"
                style={{
                  width: "60%",
                  height: "284px",
                  objectFit: "cover",
                  marginLeft: "-140px",
                  top:"0"
                }}
              />
            </div>

            {/* Bottom Row */}
            <div className="row g-4">
              {/* Speakers */}
              <div className="col-12 col-sm-6">
                <div
                  className="position-relative bg-dark rounded"
                  style={{ height: "314px" }}
                >
                  <div
                    className="position-absolute rounded-circle bg-light opacity-50"
                    style={{
                      width: "196px",
                      height: "196px",
                      filter: "blur(96px)",
                    }}
                  ></div>
                  <div className="d-flex flex-column justify-content-center h-100 p-4">
                    <div className="d-flex justify-content-center p-2">
                      <img
                        src="/images/img_69_694768_amazo.png"
                        alt="Amazon Speaker"
                        className="img-fluid"
                        style={{
                          maxWidth: "220px",
                          height: "190px",
                          objectFit: "contain",
                          marginLeft: "8px",
                        }}
                      />
                    </div>
                    <div className="d-flex flex-column ">
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "24px",
                          fontWeight: "600",
                        }}
                      >
                        Speakers
                      </h3>
                      <p
                        className="text-white"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        Amazon wireless speakers
                      </p>
                      <div
                        className="d-flex flex-column align-items-start"
                        style={{ width: "38%" }}
                      >
                        <p
                          className="text-danger mb-0"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Shop Now
                        </p>
                        <img
                          src="/images/img_underline_white_a700.svg"
                          alt="underline"
                          style={{ width: "100%", height: "1px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perfume */}
              <div className="col-12 col-sm-6">
                <div
                  className="position-relative bg-dark rounded"
                  style={{ height: "314px" }}
                >
                  <div
                    className="position-absolute rounded-circle bg-light opacity-50"
                    style={{
                      width: "238px",
                      height: "238px",
                      filter: "blur(96px)",
                    }}
                  ></div>
                  <div className="d-flex flex-column justify-content-center h-100 p-4">
                    <div className="d-flex justify-content-center p-2">
                      <img
                        src="/images/img_652e82cd70aa652.png"
                        alt="Perfume"
                        className="img-fluid"
                        style={{
                          width: "200px",
                          height: "202px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "24px",
                          fontWeight: "600",
                        }}
                      >
                        Perfume
                      </h3>
                      <p
                        className="text-white"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        GUCCI INTENSE OUD EDP
                      </p>
                      <div
                        className="d-flex flex-column align-items-start"
                        style={{ width: "38%" }}
                      >
                        <p
                          className="text-danger mb-0"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Shop Now
                        </p>
                        <img
                          src="/images/img_underline_white_a700.svg"
                          alt="underline"
                          style={{ width: "100%", height: "1px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="contaner_custom py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5">
          <div className="d-flex flex-column align-items-center gap-3">
            <img
              src="/images/img_services.svg"
              alt="delivery"
              style={{ width: "80px", height: "80px" }}
            />
            <div className="d-flex flex-column align-items-center gap-1">
              <h3
                className="text-dark"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                FREE AND FAST DELIVERY
              </h3>
              <p
                className="text-dark text-center"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
              >
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <img
              src="/images/img_services_blue_gray_900.svg"
              alt="customer service"
              style={{ width: "80px", height: "80px" }}
            />
            <div className="d-flex flex-column align-items-center gap-1">
              <h3
                className="text-dark"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                24/7 CUSTOMER SERVICE
              </h3>
              <p
                className="text-dark text-center"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
              >
                Friendly 24/7 customer support
              </p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <img
              src="/images/img_services_blue_gray_900_80x80.svg"
              alt="money back"
              style={{ width: "80px", height: "80px" }}
            />
            <div className="d-flex flex-column align-items-center gap-1">
              <h3
                className="text-dark"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                MONEY BACK GUARANTEE
              </h3>
              <p
                className="text-dark text-center"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px" }}
              >
                We return money within 30 days
              </p>
            </div>
          </div>
        </div>
        <button
          className="btn btn-light p-2 rounded-circle mt-4 float-end"
          style={{ backgroundColor: "#f8f9fa" }}
          onMouseOver={(e) =>
            e.currentTarget.classList.add("bg-danger", "text-white")
          }
          onMouseOut={(e) =>
            e.currentTarget.classList.remove("bg-danger", "text-white")
          }
        >
          <img
            src="/images/img_fill_with_up_arrow.svg"
            alt="scroll to top"
            style={{ width: "24px", height: "24px" }}
          />
        </button>
      </div>
          
      <Footer />
    </div>
  );
};

export default Home;
