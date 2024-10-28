﻿using AutoMapper;
using Azure;
using Mango.Services.CouponAPI.Data;
using Mango.Services.CouponAPI.Models;
using Mango.Services.CouponAPI.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mango.Services.CouponAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouponAPIController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly ResponseDTO _response;
        private IMapper _mapper;
        public CouponAPIController(AppDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
            _response = new ResponseDTO();
        }

        //[HttpGet]
        //public object Get()
        //{
        //    try
        //    {
        //        IEnumerable<Coupon> objlist = _db.Coupons.ToList();
        //        return objlist;
        //    }
        //    catch (Exception ex)
        //    {
        //        throw;
        //    }
        //    return null;
        //}

        //[HttpGet("{id}")]
        //public object Get(int id)
        //{
        //    try
        //    {
        //        Coupon objlist = _db.Coupons.First(u => u.CouponID == id);
        //        return objlist;
        //    }
        //    catch (Exception ex)
        //    {
        //        throw;
        //    }
        //    return null;
        //}

        /* Without mapper
        [HttpGet]
        public ResponseDTO Get()
        {
            try
            {
                IEnumerable<Coupon> objlist = _db.Coupons.ToList();
                _response.Result = objlist;
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        [HttpGet("{id}")]
        public ResponseDTO Get(int id)
        {
            try
            {
                Coupon obj = _db.Coupons.First(u => u.CouponID == id);
                _response.Result = obj;
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }
        */
        //With mapper
        [HttpGet]
        public ResponseDTO Get()
        {
            try
            {
                IEnumerable<Coupon> objList = _db.Coupons.ToList();
                _response.Result = _mapper.Map<IEnumerable<CouponDTO>>(objList);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        [HttpGet]
        [Route("{id:int}")]
        public ResponseDTO Get(int id)
        {
            try
            {
                Coupon obj = _db.Coupons.First(u => u.CouponID == id);
                _response.Result = _mapper.Map<CouponDTO>(obj);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        //Let’s add one more end point to get coupon details by coupon code.
        [HttpGet]
        [Route("GetByCode/{code}")]
        public ResponseDTO GetByCode(string code)
        {
            try
            {
                Coupon obj = _db.Coupons.FirstOrDefault(u => u.CouponCode.ToLower() == code.ToLower());
                _response.Result = _mapper.Map<CouponDTO>(obj);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }
    }
}