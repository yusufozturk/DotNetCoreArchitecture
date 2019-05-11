using DotNetCore.Objects;

namespace DotNetCoreArchitecture.Application
{
    public abstract class BaseApplicationService
    {
        protected ErrorDataResult<T> ErrorDataResult<T>(string message)
        {
            return new ErrorDataResult<T>(message);
        }

        protected ErrorResult ErrorResult()
        {
            return new ErrorResult();
        }

        protected ErrorResult ErrorResult(string message)
        {
            return new ErrorResult(message);
        }

        protected SuccessDataResult<T> SuccessDataResult<T>(T data)
        {
            return new SuccessDataResult<T>(data);
        }

        protected SuccessResult SuccessResult()
        {
            return new SuccessResult();
        }
    }
}
