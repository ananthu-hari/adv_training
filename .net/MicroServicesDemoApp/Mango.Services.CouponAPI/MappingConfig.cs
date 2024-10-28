using AutoMapper;
using Mango.Services.CouponAPI.Models;
using Mango.Services.CouponAPI.Models.DTO;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Mango.Services.CouponAPI
{
    public class MappingConfile : Profile
    {
        //public static MapperConfiguration RegisterMaps()
        //{
        //    var mappingConfig = new MapperConfiguration(config =>
        //    {
        //        config.CreateMap<CouponDTO, Coupon>();
        //        config.CreateMap<Coupon, CouponDTO>();
        //    });
        //    return mappingConfig;
        //}
        public MappingConfile() 
        {
            CreateMap<CouponDTO, Coupon>();
            CreateMap<Coupon, CouponDTO>();
        }

    }
}
